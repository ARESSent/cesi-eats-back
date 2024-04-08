import React from 'react';
import { Box, Typography, List, ListItem, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HelpPage = () => {
  return (
    <Box sx={{ p: 3 }}>

      <Typography variant="h6" gutterBottom>
        Frequently Asked Questions (FAQ)
      </Typography>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I place an order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To place an order, select the items you wish to purchase, add them to your cart, and then proceed to checkout.
            You will need to enter your delivery address and payment information before you can confirm your order.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once your order is placed, you can track its progress in the 'Orders' section of the app. You will receive updates as your order is prepared, shipped, and delivered.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I change or cancel my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you need to change or cancel your order after it has been placed, please contact our customer service as soon as possible. 
            Please note that once an order is in preparation, it may not be possible to cancel it.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography variant="h6" gutterBottom>
        Guides and Tutorials
      </Typography>

      <Typography variant="body2" gutterBottom>
        <Link href="https://www.cesi.fr/" underline="hover">How to use the app</Link>
      </Typography>

      <Typography variant="h6" gutterBottom>
        Need more help?
      </Typography>
      <Typography>
        If you can't find the answer to your question, please feel free to contact us:
      </Typography>
      <Typography variant='body2'>
        <List>
          <ListItem>Email: support@cesieats.com</ListItem>
          <ListItem>Phone: +33 1 23 45 67 89</ListItem>
        </List>
      </Typography>
    </Box>
  );
}

export default HelpPage;
