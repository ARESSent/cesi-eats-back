import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from './components/api.js';
import { 
  Box, 
  TextField, 
  Button, 
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';

const Signin = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [userType, setUserType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirm) {
      alert("Passwords do not match!");
      return;
    }
    api.postSignin(firstname, lastname, email, password, passwordConfirm, birthdate, userType) ;
  };
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            margin="normal"
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

          <FormControl component="fieldset">
            <FormLabel component="legend">User Type</FormLabel>
            <RadioGroup
              aria-label="user-type"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <FormControlLabel value="customer" control={<Radio />} label="Customer" />
              <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
              <FormControlLabel value="restaurant" control={<Radio />} label="Restaurant" />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            component={Link}
            to="/login"
            fullWidth
            variant="text"
          >
            Already have an account? Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Signin;
