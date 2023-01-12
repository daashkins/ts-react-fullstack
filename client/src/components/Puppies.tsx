import * as React from 'react';
import { useContext} from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PuppyContext } from '../context/puppiesContext'
import { PuppyContextType, IPuppy } from '../types';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ReactCardFlip from 'react-card-flip';
import { ChangeEventHandler } from 'react';
import Puppy from './Puppy'
export default function TitlebarBelowImageList() {

  const { puppies } = useContext(PuppyContext) as PuppyContextType;  
  // const { deletePuppy } = useContext(PuppyContext) as PuppyContextType;  
  // const [isFlipped, setFlipped] = React.useState<{}[]>([])

  // const showBack = (id: string) => {
  //   setFlipped({...isFlipped,
  //     id: id,
  //     flipped: true,
  // })
  // }

  // const showFront = (id: string) => {
  //   setFlipped({...isFlipped,
  //     id: id,
  //     flipped: false,
  // })
  // }

  // const showFront = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
  //   event.preventDefault();
  //   setFlipped(isFlipped.push({${id}: false}))
  // }

  return (
    <Box>
       <Typography gutterBottom variant="h4" component="div" color="Orange" fontWeight={600} sx={{ marginBottom: "20px"}}>
        Registered dogs:
       </Typography>
    <ImageList sx={{ maxHeight: 700 }} key="list">
      {puppies.map((puppy: IPuppy) => (
        <Puppy puppy={puppy}/>
        // <ReactCardFlip isFlipped={isFlipped.flipped} flipDirection="vertical">
        // <ImageListItem key={puppy.id}>
        //   <img
        //     src={`${puppy.image}?w=248&fit=crop&auto=format`}
        //     // src={puppy.image}
        //     srcSet={`${puppy.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //     alt={puppy.breed}
        //     loading="lazy"
        //   />
        //   <ImageListItemBar
        //     title={puppy.name}
        //     position="below"
        //   />
        //   <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 1, paddingRight: 1 }}>
        //   <Button size="small" onClick={(e) => handleClick(e, puppy.id)}>Learn More</Button>
        //   <DeleteIcon onClick={() => deletePuppy(puppy.id)}/>
        //    </Box>
        // </ImageListItem>
        // <ImageListItem key={puppy.id}>
        //   <img
        //     src={`${puppy.image}?w=248&fit=crop&auto=format`}
        //     // src={puppy.image}
        //     srcSet={`${puppy.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        //     alt={puppy.breed}
        //     loading="lazy"
        //     style={{opacity: '0.5'}}
        //   />
        //   <ImageListItemBar
        //     title={puppy.name}
        //     position="below"
        //   />
        //   <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 1, paddingRight: 1 }}>
        //   <Button size="small" onClick={(e) => handleClick(e, puppy.id)}>Back</Button>
        //   <DeleteIcon onClick={() => deletePuppy(puppy.id)}/>
        //    </Box>
        // </ImageListItem>
        // </ReactCardFlip>
      ))}
    </ImageList>
    </Box>
  );
}

