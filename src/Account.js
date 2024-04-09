import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Container, Typography } from '@mui/material';
import api from './components/api.js';

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    id:'',
    firstname: '',
    lastname: '',
    birthdate: '',
    addresses: {
      Home: {
        Street: 'N/A',
        Number: 'N/A',
        PostalCode: 'N/A',
        City: 'N/A',
        Country: 'N/A'
      },
      Work: {
        Street: 'N/A',
        Number: 'N/A',
        PostalCode: 'N/A',
        City: 'N/A',
        Country: 'N/A'
      }
    }
  });

  useEffect(() => {
    const fetchProfileInfo = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const profileData = await api.getProfile(token);
          if (profileData) {
            setUserInfo(currentState => ({
              ...currentState,
              ...profileData,
              addresses: profileData.address || currentState.addresses 
            }));
          }
        } catch (error) {
          console.error("Error fetching profile information:", error);
        }
      }
    };

    fetchProfileInfo();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name.includes('.')) {
      const [addressType, field] = name.split('.');
      setUserInfo(prevState => ({
        ...prevState,
        addresses: {
          ...prevState.addresses,
          [addressType]: {
            ...prevState.addresses[addressType],
            [field]: value
          }
        }
      }));
    } else {
      setUserInfo(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userInfo);
    await api.putUpdateAccount(localStorage.getItem('token'), userInfo);
  };
  const renderAddressFields = (addressType) => (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Street"
        name={`${addressType}.Street`}
        value={userInfo.addresses[addressType].Street}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Number"
        name={`${addressType}.Number`}
        value={userInfo.addresses[addressType].Number}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Postal Code"
        name={`${addressType}.PostalCode`}
        value={userInfo.addresses[addressType].PostalCode}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="City"
        name={`${addressType}.City`}
        value={userInfo.addresses[addressType].City}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Country"
        name={`${addressType}.Country`}
        value={userInfo.addresses[addressType].Country}
        onChange={handleChange}
      />
    </>
  );

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
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
            value={userInfo.firstname}
            onChange={handleChange}
            />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="family-name"
            value={userInfo.lastname}
            onChange={handleChange}
            />
          <TextField
            margin="normal"
            id="birthdate"
            label="Birthdate"
            type="date"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
            value={userInfo.birthdate}
            onChange={handleChange}
          />
          <Typography mt={3} variant="h6">Home Address</Typography>
          {renderAddressFields('Home')}
          <Typography mt={3} variant="h6">Work Address</Typography>
          {renderAddressFields('Work')}
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
