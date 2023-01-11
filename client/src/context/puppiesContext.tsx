import * as React from 'react';
import {useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { PuppyContextType, IPuppy } from '../../node_modules/@types/puppies';


export const PuppyContext = createContext<PuppyContextType | null>(null);

const PuppyProvider = ({ children } : any) => {
  const [puppies, setPuppies] = useState<IPuppy[]>([]);
  
  useEffect(()=> {
  axios.get<IPuppy[]>('http://localhost:8000/api/puppies/').then( response => {
    setPuppies([...response.data]);
})
 }, [])

 console.log(puppies);

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
    puppies.filter((puppy: IPuppy) => {
      if (puppy.id !== id) {
        setPuppies([...puppies])
      }
    })
  }
  

return (
    <PuppyContext.Provider value={{ puppies, addPuppy, updatePuppy, deletePuppy  }}>
      {children}
    </PuppyContext.Provider>
  );
};

export default PuppyProvider;