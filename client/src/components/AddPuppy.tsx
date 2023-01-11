import * as React from 'react';
import { PuppyContext } from '../context/puppiesContext';
import { PuppyContextType, IPuppy } from '../types';
import {useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import { ChangeEventHandler } from 'react';
import axios from 'axios';

const AddPuppy = () => {
  const { addPuppy } = React.useContext(PuppyContext) as PuppyContextType;
  const [formData, setFormData] = React.useState<IPuppy | {}>();
  const [breed, setBreed] = React.useState<String>("");

  const handleInputChange: ChangeEventHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [event.currentTarget.id]: event.currentTarget.value,
    });
    if(event.currentTarget.id === 'breed') {
      setBreed(event.currentTarget.value)
    }
  };

  useEffect(() => {
    const getImage = async(breed: String) : Promise<void>=> {
      const response = await axios.get(`https://api.unsplash.com/search/photos?query=${breed}&page=1&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`);
      const number: number = Math.floor(Math.random()*10);
      const image: string = response.data.results[number]?.urls.full;
      console.log(response.data.results[number]);
      if (!image){
        setFormData({
          ...formData,
          image: 'https://media.istockphoto.com/id/513228693/nl/foto/funny-dog-face.jpg?s=612x612&w=0&k=20&c=MaQmRS5XU3Yv1l2KE-XXtM90q3WPj_2edYK1GTqJO_o=',
        });      
  } setFormData({
    ...formData,
    image: image,
  });   
}
    if(breed) {
      getImage(breed);
    }
    
  }, [breed])


  const handleAddPuppy = async (e: React.FormEvent, formData: IPuppy | any) => {
    e.preventDefault();
    addPuppy(formData);
    console.log(formData);
    try {
      await axios.post(`http://localhost:8000/api/puppies/`, {
        ...formData
      });
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
    <Typography className="form_heading" gutterBottom variant="h4" component="div" color="#525050" fontWeight={600} sx={{ marginBottom: "20px"}}>
       Would you like to add your dog? <PetsIcon fontSize="large" sx={{color: "Orange"}}/>
       </Typography>
    <Box
    component="form"
    sx={{'& > :not(style)': { m: 1, width: '50%' },}}
    noValidate
    autoComplete="off"
    onSubmit={(e) => handleAddPuppy(e, formData)}
  >
    <TextField id="name" type="text"  required label="Name" variant="outlined" onChange={handleInputChange} title="name"/>
    <TextField id="breed" type="text"  required label="Breed" variant="outlined" onChange={handleInputChange} title="breed"/>
    <TextField id="birth_date" type="text"  required label="Birth date" variant="outlined" onChange={handleInputChange} title="birth_name"/>
    <Button variant="contained" type="submit" style={{backgroundColor: '#d26419'}} >Add your dog</Button>
  </Box>
  </Box>
  );
};
export default AddPuppy;