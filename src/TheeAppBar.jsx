import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


export default function TheeAppBar() {
  return (
    <div>    
 <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: "white" }}
        >
          <MenuIcon />
        </IconButton>
        <Button color="inherit" href = "/" >
        Back 
        </Button>
        <Button color="inherit">Donate</Button>
      </Toolbar>
    </AppBar>
  </Box>
</div>
  )
}
