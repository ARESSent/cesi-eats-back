import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip
} from '@mui/material';
import api from './components/api';

// Example data - replace with data fetched from backend
const currentOrdersData = [
  // Add your current orders JSON structure here
];

const orderHistoryData = [
  // Add your order history data here
];

const getOrderStatus = (order) => {
  if (order.isPickedUp) {
    return 'In Delivery';
  } 
  else if (order.isAccepted) {
    return 'Accepted by Driver';
  } 
  else if (order.isCooked) {
    return 'Awaiting Driver';
  } 
  else if (order.isPaid) {
    return 'Awaiting Restaurant';
  } 
  else if (order.isRefused || order.isCancelled) {
    return 'Cancelled';
  } 
  else if (order.isAcquitted) {
    return 'Delivered';
  }
};

const Orders = () => {
  const [currentOrders] = useState(currentOrdersData);
  const [orderHistory] = useState(orderHistoryData);

  return (
    <Container maxWidth="md">
      {currentOrders.length > 0 && (
        <>
          <Typography variant='h5'>Current Orders</Typography>
          <Box sx={{ my: 4 }}>
            <List>
              {currentOrders.map((order) => (
                <React.Fragment key={order.id}>
                  <ListItem>
                    <ListItemText
                      primary={`Order #${order.id}`}
                      secondary={`Status: ${getOrderStatus(order)}`}
                    />
                    <Chip label={getOrderStatus(order)} color="primary" />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </>
      )}

      <Typography variant='h5'>Order History</Typography>
      <Box sx={{ my: 4 }}>
        <List>
          {orderHistory.map((order) => (
            <React.Fragment key={order.id}>
              <ListItem>
                <ListItemText
                  primary={`Order #${order.id} - ${order.date}`}
                  secondary={`Items: ${order.items.join(', ')} | Total: ${order.total} | Status: ${getOrderStatus(order)}`}
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
