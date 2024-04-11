import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate } from 'react-router-dom';
import api from './components/api';  
import { useLocation } from 'react-router-dom';



function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}


const Checkout = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpiryDate] = useState('');
  const navigate = useNavigate();
  const [cvc, setCvc] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    api.postpay(localStorage.getItem('token'), order, cardNumber, expirationDate, cvc)
  };
  
  const handleGoBack = () => {
    navigate(-1); 
  };

  const query = useQuery();

  const order = query.get("order");  

  
  return (
    <Box pl={3} pr={3} sx={{ maxWidth: 400, margin: 'auto' }}>
      <Button onClick={handleGoBack} sx={{ mt: 2, mb: 2 }}>Go Back</Button>
      <Grid display='flex' flexDirection='row' >
        <CreditCardIcon color="primary" sx={{ fontSize: 40 }} display='flex' />
        <Typography ml={2} mt='4px' display='flex' variant='h5'>Credit Card</Typography>
      </Grid>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Card number"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <TextField
          label="Name on card"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Expire Date"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={expirationDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CVC"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Pay
        </Button>
      </form>
    </Box>
  );
};

export default Checkout;
