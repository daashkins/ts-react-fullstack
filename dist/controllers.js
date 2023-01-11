"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPuppies = void 0;
const db_1 = __importDefault(require("./db"));
// import { v4 as uuidv4 } from 'uuid';
// const generateCartId = () => uuidv4();
// const createNewRecipe = async (newRecipe) => {
//     const db = await dbConnect();
//   const result = await db.insertOne(recipe);
//   return await db.findOne({ _id: result.insertedId });
//   };
const getPuppies = async () => {
    const db = await db_1.default();
    console.log(db.find().toArray());
    return await db.find().toArray();
};
exports.getPuppies = getPuppies;
// export { createNewRecipe, getPuppies, deleteRecipe,updateRecipeRating };
