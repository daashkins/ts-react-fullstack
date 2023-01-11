import * as React from 'react';
import {useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { PuppyContextType, IPuppy } from '../types';


export const PuppyContext = createContext<PuppyContextType | null>(null);

const PuppyProvider = ({ children } : any) => {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);
  
  useEffect(()=> {
  axios.get<IPuppy[]>('http://localhost:8000/api/puppies/').then( response => {
    setPuppies([...response.data]);
})
 }, [])

  const addPuppy = (puppy: IPuppy) => {
  const newPuppy: IPuppy = {
    id: puppy.id,
    name: puppy.name,
    breed: puppy.breed,
    birth_date: puppy.birth_date,
    image: puppy.image,
  }
  setPuppies([...puppies, newPuppy])
}

const updatePuppy = (id: string) => {
  puppies.filter((puppy: IPuppy) => {
    if (puppy.id === id) {
      setPuppies([...puppies])
    }
  })
}
const deletePuppy = (id: string) => {
  axios.delete(`http://localhost:8000/api/puppies/${id}`).then( response => {
    if(response.status !== 202) {
      throw new Error();
    }
});
console.log(puppies);
   const newPuppies =  puppies.filter((puppy: IPuppy) => (puppy.id !== id))
   console.log(newPuppies)
  //  {
      // if (puppy.id !== id) {
      //   setPuppies([...puppies])
      // }
    // })

    setPuppies(puppies.filter((puppy) => puppy.id !== id));
  }
  

return (
    <PuppyContext.Provider value={{ puppies, addPuppy, updatePuppy, deletePuppy  }}>
      {children}
    </PuppyContext.Provider>
  );
};

export default PuppyProvider;