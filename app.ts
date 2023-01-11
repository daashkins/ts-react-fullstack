import express = require('express');
import { Request, Response, Application } from 'express';
import { connectToDatabase } from "./src/services/db.services"
import { router } from "./src/routes/router";

const app: Application = express();


app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});


connectToDatabase()
    .then(() => {
        app.use("/api/puppies", router);
        
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
export default app;
