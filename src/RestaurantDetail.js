import React, { useState, useEffect } from 'react';
import {
  Typography,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Button,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation } from 'react-router-dom';
import api from './components/api';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const RestaurantDetail = () => {
  const [restaurantMenus, setRestaurantMenus] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const query = useQuery();
  const restaurant = query.get("restaurant");

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const data = await api.getRestodetails(restaurant);
        setRestaurantMenus(data); 
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };

    fetchRestaurantDetails();
  }, []);

  const handleCheckboxChange = (itemId, isChecked) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [itemId]: isChecked,
    }));
  };

  const handleSubmitOrder = () => {
    // Add logic to handle the submission of the order
    console.log('Selected Items for Order:', selectedItems);
  };

  const isAnyItemSelected = Object.values(selectedItems).some((isSelected) => isSelected);

  return (
    <>
      <Typography variant="h4" gutterBottom>Restaurant Menus and Articles</Typography>
      {restaurantMenus.map((menu) => (
        <Accordion key={menu.id} sx={{ marginBottom: '10px', boxShadow: '3px 3px 10px rgba(0,0,0,0.2)' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 'bold' }}>{menu.name}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: '#f9f9f9' }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!selectedItems[menu.id]}
                    onChange={(e) => handleCheckboxChange(menu.id, e.target.checked)}
                    name={menu.name}
                  />
                }
                label={`${menu.name} - $${menu.price} - ${menu.description}`}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      ))}
      {isAnyItemSelected && (
        <Box sx={{ position: 'fixed', bottom: 100, right: 20 }}>
          <Button variant="contained" color="primary" onClick={handleSubmitOrder}>
            Go to cart
          </Button>
        </Box>
      )}
    </>
  );
};

export default RestaurantDetail;
