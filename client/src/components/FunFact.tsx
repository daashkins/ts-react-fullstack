import * as React from 'react';
import {useEffect, useState, createContext } from 'react';
import { PuppyContext } from '../context/puppiesContext';
import { PuppyContextType, IPuppy } from '../../node_modules/@types/puppies';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import axios from 'axios';


const FunFact = () => {
  const [fact, setFact] = useState<String>("");

  const getFact = async () => {
  const response = await axios.get(`https://dog-api.kinduff.com/api/facts`);
  setFact(response.data.facts[0]);
};

useEffect(() => {
  getFact()
},[])

  return (
    <Box sx={{display: "flex", flexDirection: "row", marginTop: "70px", justifyContent: "center"}}>
      <Box sx={{maxWidth: "70%"}}>
    <Typography className="form_heading" gutterBottom variant="h4" component="div" color="#525050" fontWeight={600} sx={{ marginBottom: "20px", }}>
       Dog fact of the day
    </Typography>

    <Typography className="form_heading" gutterBottom variant="h6" component="div" color="#525050" fontWeight={400} sx={{ marginBottom: "20px"}}>
       {fact}
    </Typography>
    </Box>
  </Box>
  );
};
export default FunFact;