export interface IPuppy {
    id: string
    name: string
    breed: string
    image: string
    birth_date: string
}
export type PuppyContextType = {
    puppies: IPuppy[]
    addPuppy: (puppy: IPuppy) => void
    updatePuppy: (puppy: IPuppy) => void
    deletePuppy: (id: sring) => void
}
