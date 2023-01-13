import * as React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { ChangeEventHandler } from 'react'
import { PuppyContext } from '../context/puppiesContext'
import { PuppyContextType, IPuppy } from '../types'
import { TransitionProps } from '@mui/material/transitions'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ReactCardFlip from 'react-card-flip'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import Dialog from '@mui/material/Dialog'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import TextField from '@mui/material/TextField'



type Props = {
    puppy: IPuppy
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

const Puppy: React.FC<Props> = ({ puppy }) => {
    const { deletePuppy } = useContext(PuppyContext) as PuppyContextType
    const { updatePuppy } = useContext(PuppyContext) as PuppyContextType
    const [isFlipped, setIsFlipped] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [formData, setFormData] = React.useState<IPuppy>({ ...puppy })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setIsFlipped(!isFlipped)
    }

    const handleInputChange: ChangeEventHandler = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [event.currentTarget.id]: event.currentTarget.value,
        })
    }
    const handleUpdatePuppy = async (
        e: React.FormEvent,
        formData: IPuppy | any
    ) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:8000/api/puppies/${puppy.id}`, {
                ...formData,
            })
            updatePuppy(formData)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
            <ImageListItem className="front">
                <img src={puppy.image} alt={puppy.breed} loading="lazy" />
                <ImageListItemBar
                    title={
                        <span className="front_header">{formData.name}</span>
                    }
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
                    <Button
                        size="small"
                        onClick={handleClick}
                        sx={{ color: 'rgb(0 0 0 / 87%)' }}
                    >
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
                    title={
                        <h2 className="back_headers">Name: {formData.name}</h2>
                    }
                    subtitle={
                        <h2 className="back_headers">
                            Breed: {formData.breed}
                        </h2>
                    }
                    position="top"
                    sx={{
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                    actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about}`}
                            onClick={handleClickOpen}
                        >
                            <EditIcon />
                        </IconButton>
                    }
                />
                <ImageListItemBar
                    title={
                        <span className="back_bottom">
                            Birth date: {puppy.birth_date}
                        </span>
                    }
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
                    <Button
                        size="small"
                        onClick={handleClick}
                        sx={{ color: 'rgb(0 0 0 / 87%)' }}
                    >
                        Back
                    </Button>
                    <DeleteIcon
                        onClick={() => deletePuppy(puppy.id)}
                        sx={{ color: '#d26419' }}
                    />
                </Box>

                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <Box
                        component="form"
                        autoComplete="off"
                        onSubmit={(e) => handleUpdatePuppy(e, formData)}
                    >
                        <AppBar
                            sx={{
                                position: 'relative',
                                backgroundColor: '#d26419',
                            }}
                        >
                            <Toolbar>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                >
                                    <CloseIcon />
                                </IconButton>
                                <Typography
                                    sx={{ ml: 2, flex: 1 }}
                                    variant="h6"
                                    component="div"
                                >
                                    Please edit information below about dog{' '}
                                    {puppy.name}
                                </Typography>
                                <Button
                                    autoFocus
                                    color="inherit"
                                    type="submit"
                                    onClick={handleClose}
                                >
                                    save
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <List>
                            <ListItem>
                                <TextField
                                    id="name"
                                    type="text"
                                    required
                                    label="Name"
                                    // defaultValue={puppy.name}
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    title="name"
                                    autoFocus
                                    margin="dense"
                                    fullWidth
                                    variant="standard"
                                />
                            </ListItem>
                            <ListItem>
                                <TextField
                                    id="breed"
                                    type="text"
                                    required
                                    label="Breed"
                                    value={formData.breed}
                                    // defaultValue={puppy.breed}
                                    onChange={handleInputChange}
                                    title="breed"
                                    margin="dense"
                                    fullWidth
                                    variant="standard"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Dialog>
            </ImageListItem>
        </ReactCardFlip>
    )
}

export default Puppy
