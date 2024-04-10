import React, { useState, useEffect } from 'react';
import { TextField, Grid, List, Box, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import categoryAll from './images/categories/categoryAll.png'
import categoryAlcool from './images/categories/categoryAlcool.png'
import categoryAsian from './images/categories/categoryAsian.png'
import categoryBreakfastAndBrunch from './images/categories/categoryBreakfastAndBrunch.png'
import categoryBubbleTea from './images/categories/categoryBubbleTea.png'
import categoryBurger from './images/categories/categoryBurger.png'
import categoryCoffeeAndTea from './images/categories/categoryCoffeeAndTea.png'
import categoryJapanesse from './images/categories/categoryJapanesse.png'
import categoryJuiceAndSmoothies from './images/categories/categoryJuiceAndSmoothies.png'
import categoryPastis from './images/categories/categoryPastis.png'
import categoryPizza from './images/categories/categoryPizza.png'
import categorySpanish from './images/categories/categorySpanish.png'
import categoryProvencal from './images/categories/categoryProvencal.png'
import categoryOriental from './images/categories/categoryOriental.png'


const Browse = () => {

  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [category] = useState('all');

  const categories = [
    {id: 1, name: 'All', pictures: categoryAll},
    {id: 2, name: 'Alcohol', pictures: categoryAlcool},
    {id: 3, name: 'Asian', pictures: categoryAsian},
    {id: 4, name: 'Breakfast And Brunch', pictures: categoryBreakfastAndBrunch},
    {id: 5, name: 'BubbleTea', pictures: categoryBubbleTea},
    {id: 6, name: 'Burger', pictures: categoryBurger},
    {id: 7, name: 'Pizza', pictures: categoryPizza},
    {id: 8, name: 'Coffee And Tea', pictures: categoryCoffeeAndTea},
    {id: 9, name: 'Japanese', pictures: categoryJapanesse},
    {id: 10, name: 'Pastis', pictures: categoryPastis},
    {id: 11, name: 'Juice And Smoothies', pictures: categoryJuiceAndSmoothies},
    {id: 12, name: 'Spanish', pictures: categorySpanish},
    {id: 13, name: 'Provençal', pictures: categoryProvencal},
    {id: 14, name: 'Oriental', pictures: categoryOriental}
  ];

  const fetchData = (searchValue = '', selectedCategory = 'all') => {
    const filteredData = categories.filter(item => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = item.name.toLowerCase().includes(searchValue.toLowerCase());
      return matchCategory && matchSearch;
    });

    setListItems(filteredData);
  };

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate("/Browsebycat?category="+categoryName);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Grid container pt={2} direction="column" spacing={2}>
      <Grid item>
        <TextField
          fullWidth
          label="Categories"
          variant="outlined"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            fetchData(e.target.value, category);
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
      <Grid item pb={1} display='flex' justifyContent='center'>
        <Button variant='outlined' onClick={() => navigate("/restaurants")}>
          <Typography variant='body1'>
            Explore Restaurants
          </Typography>
        </Button>
      </Grid>
      <Box display='flex' flexDirection='row' width='430px' >
      <Box paddingLeft={1} sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > :not(style)': {
          m: 1,
          width: '195px',
          height: '100px',
        },
      }}>
        {listItems.map((item, index) => (
          index % 2 === 0 && (
            <List 
              onClick={() => handleCategoryClick(item.name)}
              key={item.id}
              sx={{
                height: '100px',
                width: '195px',
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
              src={item.pictures} 
              alt={item.name} 
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
              {item.name}
            </Typography>
          </List>
          )
        ))}
        
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        '& > :not(style)': {
          m: 1,
          width: '195px',
          height: '100px',
        },
      }}>
        {listItems.map((item, index) => (
          index % 2 === 1 && (
            <List 
              onClick={() => handleCategoryClick(item.name)}
              key={item.id}
              sx={{
                height: '100px',
                width: '195px',
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
              src={item.pictures} 
              alt={item.name} 
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
              {item.name}
            </Typography>
          </List>
          )
        ))}
      </Box>
      </Box>

    </Grid>
  );
};

export default Browse;
