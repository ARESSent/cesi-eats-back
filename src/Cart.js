import React, { useState, useEffect } from 'react';
import { Box, Button, Container, List, ListItem, ListItemText, IconButton, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import api from './components/api';  
import cart from './images/emptycart.png';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('Home');


  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem('token');  
      if (!token) return;

      try {
        const items = await api.getCart(token);
        setCartItems(items.items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.postaddOrder(localStorage.getItem('token'), selectedAddress)
  };

  const handleRemoveItem = (id) => {
    let carIndex = cartItems.indexOf(id);
    if(carIndex > -1)
    {
      cartItems.splice(carIndex, 1)
    }
    
    setCartItems(cartItems); 

    api.putRemoveCart(localStorage.getItem('token'), cartItems)
    .catch(error => {
        console.error('Failed to update cart:', error);
        setCartItems(cartItems); 
    });
    window.location.reload();
  };


  const handleAddressChange = (event, newAddress) => {
    if (newAddress !== null) { 
      setSelectedAddress(newAddress);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        {cartItems.length > 0 ? (
          <>
          <List>
            {cartItems.map((item,index) => (
              <ListItem
                key={item+index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(item)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
              <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Box pt={2}>
          <Typography variant='h6' pb={1}>Choose your address</Typography>
          <ToggleButtonGroup
            color="primary"
            value={selectedAddress}
            exclusive
            onChange={handleAddressChange}
            aria-label="Address"
          >
            <ToggleButton value="Work">Work</ToggleButton>
            <ToggleButton value="Home">Home</ToggleButton>
          </ToggleButtonGroup>
        </Box>
           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Proceed to Checkout
          </Button>
        </Box>
        </>
        ) : (
          <>
          <Box display="flex" justifyContent="center" pl={2} pb={6}>
                    <img 
                        src={cart} 
                        alt={cart} 
                        sx={{
                            width: "100%",
                            height: 'auto',
                            display: 'block',
                            borderRadius: '10px',
                            transition: 'transform 0.5s ease',
                            '&:hover': {
                            transform: 'scale(1.1)',
                            }
                        }}
                    />    
                </Box>
          <Typography pl={16}>Your cart is empty.</Typography>
          </>
        )}
       
      </Box>
    </Container>
  );
};

export default Cart;
