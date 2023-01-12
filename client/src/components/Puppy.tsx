import * as React from 'react'
import { useContext } from 'react'
import Button from '@mui/material/Button'
import { PuppyContext } from '../context/puppiesContext'
import { PuppyContextType, IPuppy } from '../types'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ReactCardFlip from 'react-card-flip'

type Props = {
    puppy: IPuppy
}

const Puppy: React.FC<Props> = ({ puppy }) => {
    const { deletePuppy } = useContext(PuppyContext) as PuppyContextType
    const [isFlipped, setIsFlipped] = React.useState(false)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <ImageListItem key={puppy.id} className="front">
                <img src={puppy.image} alt={puppy.breed} loading="lazy" />
                <ImageListItemBar title={<span className="front_header">{puppy.name}</span>} position="below" />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 1,
                        paddingRight: 1,
                    }}
                >
                    <Button size="small" onClick={handleClick} sx={{color: "rgb(0 0 0 / 87%)"}}>
                        Learn More
                    </Button>
                    <DeleteIcon
                        onClick={() => deletePuppy(puppy.id)}
                        sx={{ color: '#d26419' }}
                    />
                </Box>
            </ImageListItem>
            <ImageListItem key={puppy.id} className="back">
                <img
                    src={puppy.image}
                    alt={puppy.breed}
                    loading="lazy"
                    style={{ opacity: '0.5' }}
                />
                <ImageListItemBar
                    title={<h2 className="back_headers">Name: {puppy.name}</h2>}
                    subtitle={
                        <h2 className="back_headers">Breed: {puppy.breed}</h2>
                    }
                    position="top"
                    sx={{
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                />
                <ImageListItemBar
                    title={<span className='back_bottom'>Birth date: {puppy.birth_date}</span>}
                    position="below"
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 1,
                        paddingRight: 1,
                    }}
                >
                    <Button size="small" onClick={handleClick} sx={{color: "rgb(0 0 0 / 87%)"}}>
                        Back
                    </Button>
                    <DeleteIcon
                        onClick={() => deletePuppy(puppy.id)}
                        sx={{ color: '#d26419' }}
                    />
                </Box>
            </ImageListItem>
        </ReactCardFlip>
    )
}

export default Puppy
