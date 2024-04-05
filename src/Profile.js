import React from 'react';
import { Grid, Box } from '@mui/material';


const Profile = () => {
  return (
      <Box height='100%'>
          <Grid p="40px">
            Icon Profile ProfileName
          </Grid>
        <Grid container flexDirection="column">

          <Grid item p="20px">
            Icon Orders
          </Grid>

          <Grid item p="20px">
            Icon Wallet
          </Grid>

          <Grid item p="20px">
            Icon Help
          </Grid>

          <Grid item p="20px">
            Icon Parameters
          </Grid>
        </Grid>
        <Grid p="20px" display='flex' alignItems='flex-end' height='535px'>
            about
        </Grid>
      </Box>
  );
}

export default Profile;