export interface IPuppy {
    id?: string;
    name: string;
    breed: string;
    image: string;
    birth_date: string;
  }
  export type PuppyContextType = {
    puppies: IPuppy[];
    addPuppy: (todo: IPuppy) => void;
    updatePuppy: (id: string) => void;
    deletePuppy: (id: sring) => void;
  };
