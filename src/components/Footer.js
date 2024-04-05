import React from 'react';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RestaurantMenuIconOutlined from '@mui/icons-material/RestaurantMenuOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketIconOutlined from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleIconOutlined from '@mui/icons-material/AccountCircleOutlined';

const Footer = () => {
  return (
    <footer>
      <Grid container display='flex' flexDirection='row' justifyContent='space-around'>
        <Grid item>
          <Link to="/Browse"><RestaurantMenuIcon fontSize='large' /></Link>
        </Grid>
        <Grid item>
          <Link to="/Cart"><ShoppingBasketIcon fontSize='large' /></Link>
        </Grid>
        <Grid item>
          <Link to="/Profile"><AccountCircleIcon fontSize='large' /></Link>
        </Grid>
      </Grid>
    </footer>
  );
} 

export default Footer;