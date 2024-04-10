import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from './components/api';
import {Grid, List, Box, Typography } from '@mui/material';

import resto from './images/restaurants/resto.png';
import emptylist from './images/restaurants/emptylist.png';

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Browsebycat = () => {
    const query = useQuery();
    const category = query.get("category");  
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchCatResto = async () => {
            const token = localStorage.getItem('token'); 
            if (!token) return;

            try {
                const restoData = await api.getCatResto(token, category); 
                setRestaurants(restoData);
            } catch (error) {
                console.error('Error fetching restaurant data:', error);
            }
        };

        fetchCatResto();
    }, [category]); 

    if (restaurants.length === 0) {
        
    }

    return (
        <Grid container pt={2} direction="column" spacing={2}>
            {restaurants.length > 0 ? (
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
                        {restaurants.map((restaurant, index) => (
                        
                        <List 
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
                            src={resto} 
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
                <Typography variant="h4" pt={6} display="flex" justifyContent="center" sx={{ color: 'text.secondary' }}>
                    {category}
                </Typography>
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
                <Typography variant="subtitle1" pl={12} sx={{ color: 'text.secondary' }}>
                    No restaurants found in this category !
                </Typography>
                <Typography variant="subtitle1" pl={12} sx={{ color: 'text.secondary' }}>
                   Nothing to eat there in this category !!!
                </Typography>
                </>
            )}
        </Grid>
    );
};

export default Browsebycat;
