import './App.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';




  
export default function App() {
 
    return (
      
    <div className='title'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button href= "/Character" color="inherit">Characters</Button>
          </Typography>
          <Button href= "/Donate" color="inherit">Donate</Button>
        </Toolbar>
      </AppBar>
    </Box>

      <h1>List Of Yakuza Games</h1>
    
      <a href='Yakuza Kiwami'><span>Yakuza Kiwami</span></a>

      <a href='Yakuza kiwami 2'><span>Yakuza kiwami 2</span></a>

      <a href='Yakuza 3'><span>Yakuza 3</span></a>

      <a href='Yakuza 4'><span>Yakuza 4</span></a>

      <a href='Yakuza 5'><span>Yakuza 5</span></a>
      
      <a href='Yakuza 6'><span>Yakuza 6</span></a>

      <a href='Yakuza 0'><span>Yakuza 0</span></a>

      <a href='YakuzaIshin'><span>Yakuza Ishin</span></a>

      <a href='Judgement'><span>Judgement</span></a>

      <a href='YakuzaLikeADragon'><span>Yakuza Like A Dragon</span></a>

      

      <div className="triangle-down"></div>
    </div>
)
}

