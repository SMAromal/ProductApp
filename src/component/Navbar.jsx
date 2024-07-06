import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div"   align="left" sx={{ flexGrow: 1 }}>
            ProductApp
          </Typography>
          <Link to={'/'}><Button style={{color: 'white'}}>Home</Button></Link>
          <Link to={'/add'}><Button style={{color: 'white'}}>Add product</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar