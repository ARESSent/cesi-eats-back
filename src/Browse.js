import React, { useState, useEffect } from 'react';
import { TextField, Grid, List, ListItem, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const Browse = () => {
  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [category, setCategory] = useState('all');

  const articles = [
    { id: 1, name: 'Burger', category: 'food' },
    { id: 2, name: 'Pizza', category: 'food' },
    { id: 3, name: 'Coke', category: 'drinks' },
    { id: 4, name: 'Lemonade', category: 'drinks' },
    { id: 5, name: 'Cheesecake', category: 'desserts' },
    { id: 6, name: 'Ice Cream', category: 'desserts' },
  ];

  const categories = ['all', 'food', 'drinks', 'desserts'];

  const fetchData = (searchValue = '', selectedCategory = 'all') => {
    const filteredData = articles.filter(item => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch = item.name.toLowerCase().includes(searchValue.toLowerCase());
      return matchCategory && matchSearch;
    });

    setListItems(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => {
              setCategory(e.target.value);
              fetchData(searchText, e.target.value);
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            fetchData(e.target.value, category);
          }}
        />
      </Grid>
      <Grid item>
        <List>
          {listItems.map((item) => (
            <ListItem key={item.id}>{item.name}</ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Browse;
