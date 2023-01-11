import * as React from 'react';
import {useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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