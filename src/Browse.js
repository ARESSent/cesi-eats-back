import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Grid, List, ListItem } from '@mui/material';

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const Browse = () => {
  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState([]);

  const fetchData = async (searchValue) => {
    if (!searchValue) {
      setListItems([]);
      return;
    }

    try {
      const response = await fetch(`YOUR_API_URL?query=${encodeURIComponent(searchValue)}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setListItems(data); 
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const throttledFetchData = useCallback(throttle((searchValue) => fetchData(searchValue), 1000), []);

  useEffect(() => {
    throttledFetchData(searchText);
  }, [searchText, throttledFetchData]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Grid>
      <Grid item>
        <List>
          {listItems.map((item, index) => (
            <ListItem key={index}>{item.name}</ListItem> 
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Browse;
