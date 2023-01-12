import * as React from 'react'
import Grid from '@mui/material/Grid'
import Puppies from './Puppies'
import AddPuppy from './AddPuppy'
import FunFact from './FunFact'

const Main = () => {
    return (
        <Grid container spacing={2} columns={16} sx={{ marginTop: '30px' }}>
            <Grid item lg={8} md={8} xs={16} key="first">
                <Puppies />
            </Grid>
            <Grid item lg={8} md={8} xs={16} key="second">
                <AddPuppy />
                <FunFact />
            </Grid>
        </Grid>
    )
}

export default Main
