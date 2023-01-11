import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "../images/bg_new.png"
export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor: "#d26419" }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Dog connect
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, backgroundColor: `#5555610f`,backgroundImage: `url(${Image})`,backgroundRepeat: "no-repeat",backgroundSize: "contain", height: 200, paddingTop: 30,
    backgroundPosition: "center", boxSizing: "border-box"}}></Box>
    </Box>
  );
}