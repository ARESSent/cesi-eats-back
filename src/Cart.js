import React, { useState } from 'react';
import { Box, Button, Container, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const initialCartItems = [
  { id: 1, name: 'Burger', quantity: 2, price: 5.99 },
  { id: 2, name: 'Fries', quantity: 1, price: 2.99 },
  { id: 3, name: 'Coke', quantity: 3, price: 1.99 },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Uncle’s Classic Burger
        </Typography>
        {cartItems.length > 0 ? (
          <List>
            {cartItems.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity} | Price: $${item.price}`} />
              </ListItem>
            ))}
            <ListItem>
              <ListItemText primary="Total" secondary={`$${calculateTotal()}`} />
            </ListItem>
          </List>
        ) : (
          <Typography>Your cart is empty.</Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" component={Link} to="/checkout">
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
