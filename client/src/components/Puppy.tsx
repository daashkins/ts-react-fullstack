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


type Props = {
    puppy: IPuppy;
  };


const Puppy: React.FC<Props> = ({puppy}) => { 

  const { deletePuppy } = useContext(PuppyContext) as PuppyContextType;  
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  }

  return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <ImageListItem key={puppy.id}>
          <img
            src={`${puppy.image}?w=248&fit=crop&auto=format`}
            // src={puppy.image}
            srcSet={`${puppy.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={puppy.breed}
            loading="lazy"
          />
          <ImageListItemBar
            title={puppy.name}
            position="below"
          />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 1, paddingRight: 1 }}>
          <Button size="small" onClick={handleClick}>Learn More</Button>
          <DeleteIcon onClick={() => deletePuppy(puppy.id)}/>
           </Box>
        </ImageListItem>
        <ImageListItem key={puppy.id}>
          <img
            src={`${puppy.image}?w=248&fit=crop&auto=format`}
            // src={puppy.image}
            srcSet={`${puppy.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={puppy.breed}
            loading="lazy"
            style={{opacity: '0.5'}}
          />
          <ImageListItemBar
            title={puppy.name}
            position="below"
          />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: 1, paddingRight: 1 }}>
          <Button size="small" onClick={handleClick}>Back</Button>
          <DeleteIcon onClick={() => deletePuppy(puppy.id)}/>
           </Box>
        </ImageListItem>
        </ReactCardFlip>
      
  );
}

export default Puppy;