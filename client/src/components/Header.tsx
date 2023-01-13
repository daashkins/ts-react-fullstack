import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from '../images/bg_new.png'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: `#5555610f` }}>
            <AppBar position="static" sx={{ backgroundColor: '#d26419' }}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Dog connect
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                sx={{
                    height: "30px",
                    backgroundColor: `#5555610f`,
                }}
            ></Box>
            <Box
                sx={{
                    flexGrow: 1,
                    backgroundColor: `#5555610f`,
                    backgroundImage: `url(${Image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    height: 200,
                    backgroundPosition: 'center',
                    boxSizing: 'border-box',
                }}
            ></Box>
        </Box>
    )
}

export default Header
