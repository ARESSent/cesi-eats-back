import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';


const Checkout = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const navigate = useNavigate();
  const [cvc, setCvc] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('Home');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // submit to backend API
  };
  
  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  const handleAddressChange = (event, newAddress) => {
    if (newAddress !== null) { // Prevents unselecting the last option
      setSelectedAddress(newAddress);
    }
  };
  
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
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
              value={expiryDate}
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
