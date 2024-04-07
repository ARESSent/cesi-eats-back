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
    <Box sx={{ p: 3 }}>
      <Grid container spacing={2} direction="column">
        <Grid item display="flex" justifyContent="center" alignItems="center">
          <BadgeIcon /> ARESS ENT
        </Grid>
        <Grid item>
          <Button
            startIcon={<AccountCircleIcon />}
            fullWidth
            onClick={() => navigate("/account")}
          >
            Account
          </Button>
        </Grid>
        <Grid item>
          <Button
            startIcon={<ListAltIcon />}
            fullWidth
            onClick={() => navigate("/orders")}
          >
            Orders
          </Button>
        </Grid>
        <Grid item>
          <Button
            startIcon={<AccountBalanceWalletIcon />}
            fullWidth
            onClick={() => navigate("/wallet")}
          >
            Wallet
          </Button>
        </Grid>
        <Grid item>
          <Button
            startIcon={<SettingsIcon />}
            fullWidth
            onClick={() => navigate("/settings")}
          >
            Settings
          </Button>
        </Grid>
        <Grid item>
          <Button
            startIcon={<HelpIcon />}
            fullWidth
            onClick={() => navigate("/help")}
          >
            Help & Support
          </Button>
        </Grid>
        <Grid item>
          <Button
            startIcon={<InfoIcon />}
            fullWidth
            onClick={() => navigate("/about")}
          >
            About
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={logout}
          >
            Log Out
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
