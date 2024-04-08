import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Grid } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RestaurantMenuIconOutlined from '@mui/icons-material/RestaurantMenuOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketIconOutlined from '@mui/icons-material/ShoppingBasketOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountCircleIconOutlined from '@mui/icons-material/AccountCircleOutlined';

const Footer = () => {
  const location = useLocation(); 
  const isBrowse = location.pathname === '/Browse' || location.pathname === '/';
  return (
    <footer>
      <Grid container display='flex' flexDirection='row' justifyContent='space-around'>
        <Grid item>
          <Link to="/Browse">
            {isBrowse ? <RestaurantMenuIcon fontSize='large' htmlColor='#BD905D' /> : <RestaurantMenuIconOutlined fontSize='large' className='outlinedicon' />}
          </Link>
        </Grid>
        <Grid item>
          <Link to="/Cart">
            {location.pathname === '/Cart' ? <ShoppingBasketIcon fontSize='large' htmlColor='#BD905D' /> : <ShoppingBasketIconOutlined fontSize='large' className='outlinedicon' />}
          </Link>
        </Grid>
        <Grid item>
          <Link to="/Profile">
            {location.pathname === '/Profile' ? <AccountCircleIcon fontSize='large' htmlColor='#BD905D' /> : <AccountCircleIconOutlined fontSize='large' className='outlinedicon' />}
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
