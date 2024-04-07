import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography paragraph>
        Inspired by passion, determination, and team spirit symbolized by Olympique de Marseille, Cesi Eats was born from the desire to create a food delivery experience that exceeds expectations. Like OM, we believe in excellence, perseverance, and pride in our community.
      </Typography>
      <Typography paragraph>
        At Cesi Eats, we're committed to offering a diverse selection of quality dishes, carefully sourced from local restaurants. Our mission is to turn every order into a memorable culinary experience, supported by reliable and attentive service.
      </Typography>
      <Typography paragraph>
        Our app is more than just a delivery service; it's a bridge between food lovers and local establishments that put so much heart into their dishes. Together, we celebrate the flavors, culture, and passion that unite us.
      </Typography>
      <Typography paragraph>
        Thank you for joining us on this adventure. With every order, you're not only supporting Cesi Eats but also the local restaurants and food enthusiasts in our community. Together, let's tantalize taste buds and keep our hearts beating for OM!
      </Typography>
      <Typography variant="h6" sx={{ mt: 4 }}>
        Go OM, and enjoy your meal with Cesi Eats!
      </Typography>
    </Box>
  );
};

export default About;
