import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';


const Checkout = () => {
  const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // submit to backend API
    };
  
  
  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: 'auto' }}>
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
        <Grid pt={2} display='flex' flexDirection='column'>
          <Typography variant='h5' pb={1}>Choose your adress</Typography>
          <ToggleButtonGroup
            color="primary"
            // value={home}
            // onChange={handleChange}
            exclusive
            aria-label="Platform"
          >
            <ToggleButton value="Work">Work</ToggleButton>
            <ToggleButton value="Home">Home</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Update Card
        </Button>
      </form>
    </Box>
  );
};

export default Checkout;
