import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Puppies from './Puppies';
import AddPuppy from './AddPuppy';

export default function BasicGrid() {
  return (
    <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Puppies/>
  </Grid>
  <Grid item xs={8}>
   <AddPuppy/>
  </Grid>
</Grid>
  );
}

