import * as React from 'react'
import { useContext } from 'react'
import { PuppyContext } from '../context/puppiesContext'
import { PuppyContextType, IPuppy } from '../types'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import Puppy from './Puppy'
import Typography from '@mui/material/Typography'

const Puppies = () => {
    const { puppies } = useContext(PuppyContext) as PuppyContextType
    return (
        <Box>
            <Typography
                gutterBottom
                variant="h4"
                component="div"
                color="Orange"
                fontWeight={600}
                sx={{ marginBottom: '20px' }}
            >
                Registered dogs:
            </Typography>
            <ImageList sx={{ maxHeight: 700 }} key="list">
                {puppies.map((puppy: IPuppy) => (
                    <Puppy puppy={puppy} key={puppy.id} />
                ))}
            </ImageList>
        </Box>
    )
}

export default Puppies
