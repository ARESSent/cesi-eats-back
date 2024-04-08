import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from './components/api.js';
import { Grid, Box, Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

const Profile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [profileInfo, setProfileInfo] = useState(null);

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    const verifyAndFetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) 
      {
        try {
          await api.postTestToken(token);
          const profileInfo = await api.getProfile(token);
          setProfileInfo(profileInfo);
        } catch (error) {
          console.error("Error during token verification or fetching profile:", error);
        }
      } 
    };

    verifyAndFetchProfile();
  }, [])
  
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2} direction="column">
      {isLoggedIn && profileInfo ? (
            <Grid item display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h6"><BadgeIcon /> {profileInfo.firstname} {profileInfo.lastname}</Typography>
            </Grid>
        )  : (<></>)}
        {!isLoggedIn ? (    
            <Grid item display="flex" justifyContent="center">
              <Button variant="contained" onClick={() => navigate("/signin")}>Sign In</Button>
              <Button variant="contained" onClick={() => navigate("/login")} sx={{ ml: 2 }}>Log In</Button>
            </Grid>
        ) : (<></>)}
          <>
            <Grid item>
              <Button startIcon={<AccountCircleIcon />} fullWidth onClick={() => navigate("/account")}>Account</Button>
            </Grid>
            <Grid item>
              <Button startIcon={<ListAltIcon />} fullWidth onClick={() => navigate("/orders")}>Orders</Button>
            </Grid>
            <Grid item>
              <Button startIcon={<AccountBalanceWalletIcon />} fullWidth onClick={() => navigate("/wallet")}>Wallet</Button>
            </Grid>
            <Grid item>
              <Button startIcon={<SettingsIcon />} fullWidth onClick={() => navigate("/settings")}>Settings</Button>
            </Grid>
            <Grid item>
              <Button startIcon={<HelpIcon />} fullWidth onClick={() => navigate("/help")}>Help & Support</Button>
            </Grid>
            <Grid item>
              <Button startIcon={<InfoIcon />} fullWidth onClick={() => navigate("/about")}>About</Button>
            </Grid>
            {isLoggedIn ? (
              <Grid item>
                <Button variant="outlined" color="error" fullWidth onClick={logout}>Log Out</Button>
              </Grid>
            ): (<></>)}
          </>
        
      </Grid>
    </Box>
  );
};

export default Profile;
