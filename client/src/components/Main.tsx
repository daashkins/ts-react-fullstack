import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Puppies from './Puppies';
import AddPuppy from './AddPuppy';
import FunFact from './FunFact';
export default function BasicGrid() {


  return (
    <Grid container spacing={2} columns={16}  sx={{ marginTop: "30px"}}>
  <Grid item lg={8} md={8} xs={16} key="first">
    <Puppies/>
  </Grid>
  <Grid item lg={8} md={8} xs={16} key="second">
   <AddPuppy/>
   <FunFact/>
  </Grid>
</Grid>
  );
}

