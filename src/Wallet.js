import React, { useState } from 'react';
import { Box, TextField, Button, Grid } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Wallet = () => {
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
      <Box sx={{ mb: 2 }}>
        <CreditCardIcon color="primary" sx={{ fontSize: 40 }} />
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name on card"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
        />
        <TextField
          label="Card number"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Add Card
        </Button>
      </form>
    </Box>
  );
};

export default Wallet;