import * as React from 'react'
import { PuppyContext } from '../context/puppiesContext'
import { PuppyContextType, IPuppy } from '../types'
import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import PetsIcon from '@mui/icons-material/Pets'
import { ChangeEventHandler } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const AddPuppy = () => {
    const { addPuppy } = React.useContext(PuppyContext) as PuppyContextType
    const [formData, setFormData] = React.useState<IPuppy>({
        id: '',
        name: '',
        breed: '',
        image: '',
        birth_date: '',
    })
    const [breed, setBreed] = React.useState<String>('')
    const [value, setValue] = React.useState<Dayjs | null>()

    const handleInputChange: ChangeEventHandler = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [event.currentTarget.id]: event.currentTarget.value,
        })
        if (event.currentTarget.id === 'breed') {
            setBreed(event.currentTarget.value)
        }
    }

    useEffect(() => {
        const getImage = async (breed: String): Promise<void> => {
            try {
                const response = await axios.get(
                    `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_KEY}&q=${breed}+dog&image_type=photo`
                )
                const number: number = Math.floor(Math.random() * 10)
                const image: string =
                    response.data.hits[number].webformatURL ||
                    'https://images.unsplash.com/photo-1609851764352-4f251185b6c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                setFormData({
                    ...formData,
                    image: image,
                    id: uuidv4(),
                })
            } catch (error) {
                console.log(error)
            }
        }
        if (breed) {
            getImage(breed)
        }
    }, [breed])

    useEffect(() => {
        const time: string = dayjs(value).format('DD/MM/YYYY')
        setFormData({
            ...formData,
            birth_date: time,
        })
    }, [value])

    const handleAddPuppy = async (
        e: React.FormEvent,
        formData: IPuppy | any
    ) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:8000/api/puppies/`, {
                ...formData,
            })
            console.log(formData)
            addPuppy(formData)
            formData.name = ''
            formData.id = ''
            formData.image = ''
            formData.birth_date = ''
            formData.breed = ''
            setValue(null)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
                className="form_heading"
                gutterBottom
                variant="h4"
                component="div"
                color="#525050"
                fontWeight={600}
                sx={{ marginBottom: '20px' }}
            >
                Would you like to add your dog?{' '}
                <PetsIcon fontSize="large" sx={{ color: 'Orange' }} />
            </Typography>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '50%' } }}
                autoComplete="off"
                onSubmit={(e) => handleAddPuppy(e, formData)}
            >
                <TextField
                    id="name"
                    type="text"
                    required
                    label="Name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleInputChange}
                    title="name"
                />
                <TextField
                    id="breed"
                    type="text"
                    required
                    label="Breed"
                    variant="outlined"
                    value={formData.breed}
                    onChange={handleInputChange}
                    title="breed"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        disableFuture
                        label="Birth date"
                        minDate={dayjs('1990-01-01')}
                        openTo="year"
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue)
                        }}
                        renderInput={(params) => (
                            <TextField {...params} required />
                        )}
                    />
                </LocalizationProvider>
                <Button
                    variant="contained"
                    type="submit"
                    style={{ backgroundColor: '#d26419' }}
                >
                    Add your dog
                </Button>
            </Box>
        </Box>
    )
}
export default AddPuppy
