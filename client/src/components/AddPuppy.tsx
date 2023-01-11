import * as React from 'react';
import { PuppyContext } from '../context/puppiesContext';
import { PuppyContextType, IPuppy } from '../../node_modules/@types/puppies';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddPuppy = () => {
  const { addPuppy } = React.useContext(PuppyContext) as PuppyContextType;
  const [formData, setFormData] = React.useState<IPuppy | {}>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleAddPuppy = (e: React.FormEvent, formData: IPuppy | any) => {
    e.preventDefault();
    addPuppy(formData);
  };
  return (

    <Box
    component="form"
    sx={{'& > :not(style)': { m: 1, width: '50%' },}}
    noValidate
    autoComplete="off"
    // onSubmit={(e)=> {handleCreateNewRecipe(e); delayAndGo(e, "/recipes")}}
  >
    <TextField id="outlined-basic" type="text"  required label="Name" variant="outlined"/>
    <TextField id="outlined-basic" type="text"  required label="Breed" variant="outlined"/>
    <TextField id="outlined-basic" type="text"  required label="Birth date" variant="outlined"/>
    <Button variant="contained" type="submit" style={{backgroundColor: "rgb(91 150 147)"}} >Add your puppy</Button>
  </Box>


    // <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
    //   <div>
    //     <div>
    //       <label htmlFor="name">Title</label>
    //       <input onChange={handleForm} type="text" id="title" />
    //     </div>
    //     <div>
    //       <label htmlFor="description">Description</label>
    //       <input onChange={handleForm} type="text" id="description" />
    //     </div>
    //   </div>
    //   <button disabled={formData === undefined ? true : false}>Add Todo</button>
    // </form>
  );
};
export default AddPuppy;