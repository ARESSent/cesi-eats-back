import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

const Profile = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.assign("/login");
  }
  
  return (
    <Box>
      <Grid container spacing={2} direction="column" p="40px">
        <Grid item>
          <AccountCircleIcon /> ProfileName 
          <button type="button"><Link to="/login">Log In</Link></button>
          <button onClick={logout}>Log Out</button> 
        </Grid>
        <Grid item> 
          <BadgeIcon /> <Link to="/account">Account</Link>
        </Grid>
        <Grid item> 
          <ListAltIcon /> <Link to="/orders">Orders</Link>
        </Grid>
        <Grid item>
          <AccountBalanceWalletIcon /> <Link to="/wallet">Wallet</Link>
        </Grid>
        <Grid item>
          <SettingsIcon /> <Link to="/settings">Settings</Link>
        </Grid>
        <Grid item>
          <HelpIcon /> <Link to="/help">Help & Support</Link>
        </Grid>
        <Grid item>
          <InfoIcon /> <Link to="/about">About</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
