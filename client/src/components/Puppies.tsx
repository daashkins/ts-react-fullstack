import * as React from 'react';
import { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PuppyContext } from '../context/puppiesContext'
import { PuppyContextType, IPuppy } from '../../node_modules/@types/puppies';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {

  const { puppies } = useContext(PuppyContext) as PuppyContextType;  

  return (
    <Box>
       <Typography gutterBottom variant="h4" component="div" color="Orange" fontWeight={600}>
        Registered dogs:
       </Typography>
    <ImageList sx={{ maxHeight: 700 }}>
      {puppies.map((puppy) => (
        <ImageListItem key={puppy.id}>
          <img
            src={`${puppy.image}?w=248&fit=crop&auto=format`}
            srcSet={`${puppy.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={puppy.breed}
            loading="lazy"
          />
          <ImageListItemBar
            title={puppy.name}
            position="below"
          />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 1, paddingRight: 1 }}>
          <Button size="small">Learn More</Button>
          <DeleteIcon/>
           </Box>
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  );
}
