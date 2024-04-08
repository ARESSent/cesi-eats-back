import React, { useState, useEffect } from 'react';
import { TextField, Grid, List, ListItem, Select, MenuItem, InputLabel, FormControl, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


const Restaurants = () => {
  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [restaurant, setRestaurant] = useState('all');

  const fetchData = (searchValue = '', selectedRestaurant = 'all') => {
    const filteredData = restaurant.filter(item => {
      const matchRestaurant = selectedRestaurant === 'all' || item.restaurant === selectedRestaurant;
      const matchSearch = item.name.toLowerCase().includes(searchValue.toLowerCase());
      return matchRestaurant && matchSearch;
    });

    setListItems(filteredData);
  };
  
  return (
    <Grid container pt={2} direction="column" spacing={2}>
      <Grid item>
        <TextField
          fullWidth
          label="Recherche"
          variant="outlined"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            fetchData(e.target.value, restaurant);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Restaurants;
