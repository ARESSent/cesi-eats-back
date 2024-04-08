import React from 'react';
import { useNavigate } from 'react-router-dom';
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

  const logout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  }
  
  return (
    <Box pt={3} display='flex' justifyContent='center'>
      <Grid container spacing={3} display='block' width='370px'>
        <Grid item display='flex' pb={3} alignItems='center' borderBottom='1px solid darkGrey'>
          <BadgeIcon alignItems='center' fontSize='large' htmlColor='#BD905D'/> 
          <Typography variant="h6" pl={1} color='#BD905D'>
            ARESS ENT
          </Typography>
        </Grid>
        <Grid item display='flex' pb={3} alignItems='center' borderBottom='1px solid darkGrey'>
          <AccountCircleIcon alignItems='center' fontSize='large' htmlColor='#1976D2'/>
          <Button
            onClick={() => navigate("/account")}
            style={{ paddingBottom: '3px' }}
          >
            <Typography variant="h6">
              Profile
            </Typography>
          </Button>
        </Grid>
        <Grid item display='flex' pb={3} alignItems='center' borderBottom='1px solid darkGrey'>
          <ListAltIcon alignItems='center' fontSize='large' htmlColor='#1976D2'/>
          <Button
            onClick={() => navigate("/orders")}
            style={{ paddingBottom: '3px' }}
          >
            <Typography variant="h6">
              Order
            </Typography>
          </Button>
        </Grid>
        <Grid item display='flex' pb={3} alignItems='center' borderBottom='1px solid darkGrey'>
          <AccountBalanceWalletIcon alignItems='center' fontSize='large' htmlColor='#1976D2'/>
          <Button
            onClick={() => navigate("/wallet")}
            style={{ paddingBottom: '3px' }}
          >
            <Typography variant="h6">
              Wallet
            </Typography>
          </Button>
        </Grid>
        <Grid item display='flex' pb={3} alignItems='center' borderBottom='1px solid darkGrey'>
          <SettingsIcon alignItems='center' fontSize='large' htmlColor='#1976D2'/>
          <Button
            onClick={() => navigate("/settings")}
            style={{ paddingBottom: '3px' }}
          >
            <Typography variant="h6">
              Settings
            </Typography>
          </Button>
        </Grid>
        <Grid item display='flex' pb={3} alignItems='center' borderBottom='1px solid darkGrey'>
          <HelpIcon alignItems='center' fontSize='large' htmlColor='#1976D2'/>
          <Button
            onClick={() => navigate("/help")}
            style={{ paddingBottom: '3px' }}
          >
            <Typography variant="h6">
              Help & Support
            </Typography>
          </Button>
        </Grid>
        <Grid item display='flex' pb={3} alignItems='center' borderBottom='1px solid darkGrey'>
          <InfoIcon alignItems='center' fontSize='large' htmlColor='#1976D2'/>
          <Button
            onClick={() => navigate("/about")}
            style={{ paddingBottom: '3px' }}
          >
            <Typography variant="h6">
              About
            </Typography>
          </Button>
        </Grid>
        <Grid item pt={5} display='flex' alignItems='center'>
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
      </Grid>
    </Box>
  );
}

export default Profile;
