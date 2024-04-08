import React, { useState, useEffect } from 'react';
import { TextField, Grid, List, ListItem, Select, MenuItem, InputLabel, FormControl, Button, Typography } from '@mui/material';
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


const Browse = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Deux colonnes égales pour deux catégories par ligne
    gap: '10px', // Espace entre les éléments
    maxWidth: '430px',
    margin: '0 auto', // Centrer la grille dans la page
  };

  const itemStyle = {
    display: 'flex',
    flexDirection: 'column', // La direction de la colonne pour que le texte vienne après l'image
    alignItems: 'center', // Centrer le contenu horizontalement
    justifyContent: 'center', // Centrer le contenu verticalement
    borderRadius: '10px', // Bords arrondis
    overflow: 'hidden', // Empêcher le débordement du contenu
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Ombre portée pour un effet de profondeur
  };

  const imageStyle = {
    width: '100%', // Largeur complète du conteneur
    height: 'auto', // Hauteur auto pour maintenir le ratio
    display: 'block', // Éviter l'espace supplémentaire sous l'image
  };

  const textStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent pour le texte
    color: 'white', // Texte en blanc pour contraster avec le fond sombre
    width: '100%', // Largeur complète du conteneur
    textAlign: 'center', // Centrer le texte
    padding: '8px 0', // Padding vertical pour l'espacement
    position: 'absolute', // Positionner sur l'image
    bottom: '0', // Au bas de l'image
  };

  const [searchText, setSearchText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [category, setCategory] = useState('all');

  const categories = [
    {id: 1, name: 'all', pictures: categoryAll},
    {id: 2, name: 'alcool', pictures: categoryAlcool},
    {id: 3, name: 'asian', pictures: categoryAsian},
    {id: 4, name: 'Breakfast', pictures: categoryBreakfastAndBrunch},
    {id: 5, name: 'bubbletea', pictures: categoryBubbleTea},
    {id: 6, name: 'burger', pictures: categoryBurger},
    {id: 7, name: 'pizza', pictures: categoryPizza},
    {id: 8, name: 'coffeeAndTea', pictures: categoryCoffeeAndTea},
    {id: 9, name: 'japanesse', pictures: categoryJapanesse},
    {id: 10, name: 'pastis', pictures: categoryPastis},
    {id: 11, name: 'juiceAndSmoothies', pictures: categoryJuiceAndSmoothies}
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container pt={2} direction="column" spacing={2}>
      {/* <Grid item>
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
      </Grid> */}
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
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item display='flex' justifyContent='center'>
        <Button onClick={() => navigate("/restaurants")}>
          <Typography variant='body1'>
            Explore Restaurants
          </Typography>
        </Button>
      </Grid>
      <div style={containerStyle}>
      {listItems.map((item) => (
        <div key={item.id} style={itemStyle}>
          <img src={item.pictures} alt={item.name} style={imageStyle}/>
          <div style={textStyle}>{item.name}</div>
        </div>
      ))}
    </div>

    </Grid>
  );
};

export default Browse;
