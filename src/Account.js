import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography  } from '@mui/material';
import api from './components/api.js';

const Account = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [userAdresses, setUserAdresses] = useState({
    addresses: {
      Office: {
        Street: '',
        Number: '',
        PostalCode: '',
        City: '',
        Country: '',
      },
      Home: {
        Street: '',
        Number: '',
        PostalCode: '',
        City: '',
        Country: '',
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }
    // call api backend
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.includes('.')) {
      const [addressKey, fieldKey] = name.split('.');
      setUserAdresses(prevState => ({
        ...prevState,
        addresses: {
          ...prevState.addresses,
          [addressKey]: {
            ...prevState.addresses[addressKey],
            [fieldKey]: value,
          },
        },
      }));
    } else {
      setUserAdresses(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const renderAddressFields = (prefix) => (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Street"
        name={`${prefix}.Street`}
        value={userAdresses.addresses[prefix].Street}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Number"
        name={`${prefix}.Number`}
        value={userAdresses.addresses[prefix].Number}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Postal Code"
        name={`${prefix}.PostalCode`}
        value={userAdresses.addresses[prefix].PostalCode}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="City"
        name={`${prefix}.City`}
        value={userAdresses.addresses[prefix].City}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Country"
        name={`${prefix}.Country`}
        value={userAdresses.addresses[prefix].Country}
        onChange={handleChange}
      />
    </>
  );

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Typography variant="h6">Personal Information</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="given-name"
            autoFocus
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="family-name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordConfirm"
            label="Confirm Password"
            type="password"
            id="password-confirm"
            value={passwordConfirm}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <TextField
            id="birthdate"
            label="Birthdate"
            type="date"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <Typography variant="h6">Office Address</Typography>
          {renderAddressFields('Office')}
          <Typography variant="h6">Home Address</Typography>
          {renderAddressFields('Home')}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Account;
