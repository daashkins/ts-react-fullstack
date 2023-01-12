import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Image from '../images/bg_new.png'
import Header from './Header'
import Main from './Main'

const Home = () => {
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    )
}

export default Home
