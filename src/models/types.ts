
import { ObjectId } from "mongodb";

export default interface Puppy {
  name: string, 
  birth_date: string, 
  breed: string,
  image: string, 
  _id?: ObjectId,
  id?: string,
}

