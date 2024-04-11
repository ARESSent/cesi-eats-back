import React, { useState, useEffect } from 'react';
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
import emptylist from './images/emptyorder.png';

const getOrderStatus = (order) => {
  if (order.isPickedUp) {
    return 'In Delivery';
  } 
  else if (order.isAccepted) {
    return 'Accepted by Restaurant';
  } 
  else if (order.isCooked) {
    return 'Awaiting Delivery';
  } 
  else if (order.isPaid) {
    return 'Paid, Awaiting Restaurant';
  } 
  else if (order.isRefused) {
    return 'Cancelled';
  } 
  else if (order.isAcquitted) {
    return 'Delivered';
  }
  return 'Pending';
};

const Orders = () => {
  const [currentOrders, setCurrentOrders] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token'); 
      if (!token) return;

      try {
        const currentOrdersData = await api.getOrders("current", token);
        setCurrentOrders(currentOrdersData);
        
        const orderHistoryData = await api.getOrders("history", token);
        setOrderHistory(orderHistoryData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      {currentOrders.length > 0 && orderHistory.length > 0 ? (
        <></>
      ) : (
        <Box display="flex" justifyContent="center" pl={2} pb={6}>
        <img 
            src={emptylist} 
            alt={emptylist} 
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
      )}
      {currentOrders.length > 0 ? (
        <>
          <Typography variant='h5' pt={2}>Current Orders</Typography>
          <Box sx={{ my: 2 }}>
            <List>
              {currentOrders.map((order) => (
                <React.Fragment key={order.id}>
                  <ListItem>
                    <ListItemText
                      primary={`Order #${order.id}`}
                    />
                    <Chip label={getOrderStatus(order)} color="primary" />
                  </ListItem>
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </List>
          </Box>
        </>
      ) : (
        <Typography sx={{ mt: 4 }} variant="h6" color="text.secondary">No current orders found.</Typography>
      )}

      <Typography variant='h5' pt={2}>Order History</Typography>
      {orderHistory.length > 0 ? (
        <Box sx={{ my: 2 }}>
          <List>
            {orderHistory.map((order) => (
              <React.Fragment key={order.id}>
                <ListItem>
                  <ListItemText
                    primary={`Order #${order.id} - ${new Date(order.createdAt).toLocaleDateString()}`}
                  />
                  <Chip label={getOrderStatus(order)} color="primary" />
                </ListItem>
                <Divider component="li" />
              </React.Fragment>
            ))}
          </List>
        </Box>
      ) : (
        <Typography sx={{ my: 2 }} variant="h6" color="text.secondary">No historical orders found.</Typography>
      )}
    </Container>
  );
};

export default Orders;
