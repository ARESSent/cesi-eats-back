import React, { useState, useEffect } from 'react';
import { TextField, Grid, List, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import api from './components/api';
import emptylist from './images/restaurants/emptylist.png';
import resto0 from './images/restaurants/resto0.png';
import resto1 from './images/restaurants/resto1.png';
import resto2 from './images/restaurants/resto2.png';
import resto3 from './images/restaurants/resto3.png';
import resto4 from './images/restaurants/resto4.png';
import { useNavigate } from 'react-router-dom';


const Restaurants = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCatResto = async () => {
      try {
        const restoData = await api.getCatResto("All");
        setRestaurants(restoData);
        setFilteredRestaurants(restoData); 
        console.log(restoData)
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
      }
    };

    fetchCatResto();
  }, []);


  useEffect(() => {
    if (searchText === '') {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(restaurant => {
        return restaurant.firstname.toLowerCase().includes(searchText.toLowerCase());
      });
      setFilteredRestaurants(filtered);
    }
  }, [searchText, restaurants]);

  const handleRestaurantClick = (restoId) => {
    navigate("../restaurantdetail?restaurant="+restoId);
  };

  return (
      <Grid container pt={2} direction="column" spacing={2}>
        <Grid item>
        <TextField
          fullWidth
          label="Recherche"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
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
          {filteredRestaurants.length > 0 ? (
              <Box display='flex' flexDirection='row' width='430px' >
                  <Box paddingLeft={1} sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      '& > :not(style)': {
                      m: 1,
                      width: '414px',
                      height: '296px',
                      },
                  }}>
                      {filteredRestaurants.map((restaurant, index) => (
                      
                      <List 
                          onClick={() => handleRestaurantClick(restaurant.id)}
                          key={restaurant.id}
                          sx={{
                              height: '100px',
                              width: '312px',
                              borderRadius: '12px',
                              display: 'flex',
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              overflow: 'hidden',
                              boxShadow: 3,
                              position: 'relative',
                              '&:hover': {
                              boxShadow: 6,
                              },
                          }}
                          >
                          <img 
                          src={resto0} 
                          alt={restaurant.firstname} 
                          sx={{
                              width: "100%",
                              height: 'auto',
                              display: 'block',
                              borderRadius: '10px',
                              transition: 'transform 0.5s ease',
                              '&:hover': {
                              transform: 'scale(1.1)',
                              }
                          }}
                          />
                          <Typography
                          component="div"
                          sx={{
                              position: 'absolute',
                              bottom: 0,
                              width: '100%',
                              bgcolor: 'rgba(0, 0, 0, 0.5)',
                              color: 'white',
                              textAlign: 'center',
                          }}
                          >
                          {restaurant.firstname}
                          </Typography>
                      </List>
                      
                      ))}
                      
                  </Box>
              </Box>
          ) : (
              <>
              <Box display="flex" justifyContent="center" pl={2} pt={6} pb={6}>
                  <img 
                      src={emptylist} 
                      alt={emptylist} 
                      sx={{
                          width: "100%",
                          height: 'auto',
                          display: 'block',
                          borderRadius: '10px',
                          transition: 'transform 0.5s ease',
                          '&:hover': {
                          transform: 'scale(1.1)',
                          }
                      }}
                  />    
              </Box>
              <Typography variant="subtitle1" pl={18} sx={{ color: 'text.secondary' }}>
                  No restaurant found !
              </Typography>
              <Typography variant="subtitle1" pl={18} sx={{ color: 'text.secondary' }}>
                 Nothing to eat there !
              </Typography>
              </>
          )}
      </Grid>
  );
};

export default Restaurants;
