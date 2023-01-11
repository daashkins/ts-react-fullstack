"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoDB = __importStar(require("mongodb"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lz0m2ow.mongodb.net/?retryWrites=true&w=majority`;
const client = new mongoDB.MongoClient(url);
const dbConnect = async () => {
    await client.connect();
    try {
        const db = client.db("puppies");
        const collection = db.collection("puppies_data");
        if (!collection) {
            db.createCollection("puppies_data");
        }
        return collection;
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = dbConnect;
