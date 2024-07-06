import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, Grid, Typography, Box, CardMedia } from '@mui/material'
import axios from 'axios'

const Home = () => {

    const[products,setProducts]=useState([])
        useEffect(()=>{
          axios.get('https://fakestoreapi.com/products').then((res)=>{
              setProducts(res.data)
          })
        },[])
  return (
    
    <Box sx={{ width: '100%', padding:'0%', background: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)' }}>
    <h1>Product List</h1>
    <Grid container spacing={3}>
        {products.map((product, index)=>(
        <Grid item xs={12} sm={6} md={4} key={index}>
        <Card sx={{ minWidth: 275, margin:'auto', background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)' }}>
        <CardMedia
                component="img"
                height="500"
                image={product.image}
                alt={product.image}
              />
        <CardContent>
            <Typography variant="h5" component="div">
            <b>Title: </b>{product.title}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <b>Dscription: </b>{product.description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>Price: </b>{product.price}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <b>Category: </b>{product.category}
            </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' >UPDATE</Button>
        <Button variant='contained' >DELETE</Button>
      </CardActions>
  </Card>
  </Grid>
      ))}
  
  </Grid>
  </Box>
  )
}

export default Home