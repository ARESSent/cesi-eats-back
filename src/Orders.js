import React, { useState } from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const OrderHistoryData = [
  {
    id: 1,
    date: '2023-04-01',
    items: ['Classic Burger', 'Fries'],
    total: '$12.99',
  },
  {
    id: 2,
    date: '2023-03-28',
    items: ['Spanish Burger', 'Coke'],
    total: '$9.99',
  },
  {
    id: 3,
    date: '2023-03-15',
    items: ['Cheeseburger', 'Fries', 'Milkshake'],
    total: '$15.99',
  },
];

const Orders = () => {
  const [orderHistory] = useState(OrderHistoryData);

  return (
    <Container maxWidth="md">
      {/* mettre une condition pour afficher les current uniquement seulement si il y'en a */}
      <Typography variant='h5'>Current</Typography>
      
      <Box sx={{ my: 4 }}>
        <List>
          {orderHistory.map((order) => (
            <React.Fragment key={order.id}>
              <ListItem>
                <ListItemText
                  primary={`Order #${order.id} - ${order.date}`}
                  secondary={`Items: ${order.items.join(', ')} | Total: ${order.total}`}
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Orders;
