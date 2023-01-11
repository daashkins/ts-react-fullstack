import express = require('express');
import { Request, Response } from 'express';
import { collections } from "../services/db.services";
import {v4 as uuidv4} from 'uuid';
// import cors from 'cors';
import cors = require('cors');
import Puppy from "../models/types";
import {getImage} from "../services/get.image";

export const router = express.Router();
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
router.use(express.json());
router.use(cors(options));

router.get('/', async (_req: Request, res: Response) => {
    try { 
      const puppies = await collections.puppies?.find<Puppy>({}).toArray() as Puppy[];
      res.status(200).send(puppies);
      } catch (error) {
          res.status(500).send(error.message);
      }
    }
   );

router.get('/:id', async (_req: Request, res: Response) => {
    const id= _req.params.id;
    try { 
      const puppy = await collections.puppies?.findOne<Puppy>({id: id}) as Puppy;
      res.status(200).send(puppy);
      } catch (error) {
          res.status(500).send(error.message);
      }
    }
);


router.post('/', async (_req: Request, res: Response) => {
    try {
        const newPuppy = _req.body as Puppy;
        newPuppy.id= uuidv4();
        // newPuppy.image = await getImage(newPuppy.breed);
        // console.log(newPuppy, "mary")
        const result = await collections.puppies?.insertOne(newPuppy);
        result
            ? res.status(201).send(`Successfully created with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new puppy.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

router.put("/:id", async (_req: Request, res: Response) => {
    const id = _req.params.id;
    try {
        const updatedPuppy: Puppy = _req.body as Puppy;
        const result = await collections.puppies?.updateOne({id: id}, { $set: updatedPuppy });
        if(result && result.upsertedId) {
            res.status(200).send(`Successfully updated Puppy with id ${id}`)
        } else {
            res.status(304).send(`Puppy with id: ${id} not updated`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async (_req: Request, res: Response) => {
    const id = _req.params.id;
    try {
        const result = await collections.puppies?.deleteOne({id: id});
        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed puppy with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove puppy with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Puppy with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});