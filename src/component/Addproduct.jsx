import React, { useEffect, useState } from 'react'
import { Box, Button, colors, TextField } from '@mui/material'
import { green } from '@mui/material/colors'


const Addproduct = () => {
  return (
    <Box

      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' }, background: 'linear-gradient(135deg, #a18cd1 30%, #fbc2eb 100%)'
      }} 
      noValidate
      autoComplete="off"
    >
        <h1 >Add Products</h1> 
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          
        />
        </div>
        <div>
        <TextField
          id="outlined-disabled"
          label="Description"
          
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Price"
          
        />
        </div>
        <div>
        <TextField
          id="outlined-read-only-input"
          label="Category"
          
        />
      </div>
      <div>
        <Button variant='contained' >ADD</Button> 
        <br></br>
      </div>
    </Box>
  )
}

export default Addproduct