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
import StarIcon from '@mui/icons-material/Star';


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
    <Box pt={3} display='flex' justifyContent='center'>
      <Grid container spacing={3} display='block' width='370px'>
      {isLoggedIn && profileInfo ? (
            <Grid item display='flex' pb={3} borderBottom='1px solid darkGrey'>
              <BadgeIcon fontSize='large' htmlColor='#BD905D'/>
              <Typography variant="h6" marginTop='5px' marginLeft='6px' marginRight='3px' color='#BD905D'>
                {profileInfo.firstname} {profileInfo.lastname}
              </Typography>
              <StarIcon fontSize='large' htmlColor='#BD905D'/>
            </Grid>
        )  : (<></>)}
        {!isLoggedIn ? (    
            <Grid item display='flex' justifyContent='center' pb={3} borderBottom='1px solid darkGrey'>
              <Button size='large' variant="contained" onClick={() => navigate("/login")}>Log In</Button>
              <Button size='large' variant="contained" onClick={() => navigate("/signin")} sx={{ ml: 5 }}>Sign In</Button>
            </Grid>
        ) : (<></>)}
          <>
          {isLoggedIn ? (
            <>
              <Grid item display='flex' pb={3} borderBottom='1px solid darkGrey'>
                <AccountCircleIcon  fontSize='large' htmlColor='#1976D2'/>
                <Button
                  onClick={() => navigate("/account")}
                  style={{ paddingBottom: '3px' }}
                >
                  <Typography variant="h6">
                    Profile
                  </Typography>
                </Button>
              </Grid>
              <Grid item display='flex' pb={3} borderBottom='1px solid darkGrey'>
                <ListAltIcon  fontSize='large' htmlColor='#1976D2'/>
                <Button
                  onClick={() => navigate("/orders")}
                  style={{ paddingBottom: '3px' }}
                >
                  <Typography variant="h6">
                    Order
                  </Typography>
                </Button>
              </Grid>
              <Grid item display='flex' pb={3} borderBottom='1px solid darkGrey'>
                <AccountBalanceWalletIcon fontSize='large' htmlColor='#1976D2'/>
                <Button
                  onClick={() => navigate("/wallet")}
                  style={{ paddingBottom: '3px' }}
                >
                  <Typography variant="h6">
                    Wallet
                  </Typography>
                </Button>
              </Grid>
              <Grid item display='flex' pb={3} borderBottom='1px solid darkGrey'>
                <SettingsIcon fontSize='large' htmlColor='#1976D2'/>
                <Button
                  onClick={() => navigate("/settings")}
                  style={{ paddingBottom: '3px' }}
                >
                  <Typography variant="h6">
                    Settings
                  </Typography>
                </Button>
              </Grid>
              </>
              ) : (<></>)}

              <Grid item display='flex' pb={3} borderBottom='1px solid darkGrey'>
                <HelpIcon fontSize='large' htmlColor='#1976D2'/>
                <Button
                  onClick={() => navigate("/help")}
                  style={{ paddingBottom: '3px' }}
                >
                  <Typography variant="h6">
                    Help & Support
                  </Typography>
                </Button>
              </Grid>
              <Grid item display='flex' pb={3} borderBottom='1px solid darkGrey'>
                <InfoIcon fontSize='large' htmlColor='#1976D2'/>
                <Button
                  onClick={() => navigate("/about")}
                  style={{ paddingBottom: '3px' }}
                >
                  <Typography variant="h6">
                    About
                  </Typography>
                </Button>
              </Grid>
              {isLoggedIn ? (
              <>
               <Grid item pt={5} display='flex'>
               <Button
                 variant="outlined"
                 color="error"
                 onClick={logout}
               >
                 <Typography variant="h6">
                   Log Out
                 </Typography>
               </Button>
             </Grid>
             </>
            ): (<></>)}    
            </>    
      </Grid>
    </Box>
  );
};

export default Profile;
