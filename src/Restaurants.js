import React, { useState, useEffect } from 'react';
import { TextField, Grid, List, ListItem, Select, MenuItem, InputLabel, FormControl, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';


const Restaurants = () => {
  const [isFocused, setIsFocused] = useState(false);
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: isFocused ? '#BD905D' : 'inherit' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              '&.Mui-focused fieldset': {
                borderColor: '#BD905D',
              },
            },
            '& label.Mui-focused': {
              color: '#BD905D',
            },
            '& label:hover': {
              color: 'rgba(0, 0, 0, 0.54)',
            },
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Restaurants;
