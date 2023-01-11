// // External dependencies
// import { ObjectId } from "mongodb";
// // Class Implementation
// export default class Puppy {
//   constructor(public name: string, public birth_date: string, public breed: string, public id?: ObjectId) {}
// }
// import * as mongoDB from "mongodb";
// import * as dotenv from 'dotenv'
// dotenv.config()
// const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lz0m2ow.mongodb.net/?retryWrites=true&w=majority`
// const client: mongoDB.MongoClient = new mongoDB.MongoClient (url);
// const dbConnect = async () => {
//   await client.connect();
//   try {
//       const db: mongoDB.Db = client.db("puppies");
//       const collection: mongoDB.Collection = db.collection("puppies_data");
//     if(!collection) {
//         db.createCollection("puppies_data");
//     }
//       return collection;
//   } catch (err) {
//       console.log(err);
//   }
// }
// export async function connectToDatabase () {
//   dotenv.config();
//   const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
//   await client.connect();
//   const db: mongoDB.Db = client.db(process.env.DB_NAME);
//   const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);
// collections.games = gamesCollection;
//        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
// }
// export const collections: { puppies_data?: mongoDB.Collection } = {}
// // export default dbConnect;
