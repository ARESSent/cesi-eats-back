import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import apiDelivery from './services/apiDelivery';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const columns = [
    { field: 'id', headerName: 'Id', width: 130, editable: false },
    { field: 'isCooked', headerName: 'Cooked', width: 99, type: 'boolean', editable: false },
    { field: 'validation', headerName: 'Validated', width: 99, type: 'boolean', editable: true },
    { field: 'refus', headerName: 'Refused', width: 99, type: 'boolean', editable: true },
  ];
  
// Alert est un composant utilitaire pour les styles d'alerte
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function formatAddress(address) {
    return `${address.Street} ${address.Number}, ${address.ZipCode} ${address.City}, ${address.Country}`;
  }
  
  // Composant pour les détails des adresses
  function AddressDetails({ title, address }) {
    return (
      <>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" component="div">
          {formatAddress(address)}
        </Typography>
      </>
    );
  }
  
  // Composant de dialogue pour afficher les détails de la commande
  function OrderDetailsDialog({ open, onClose, details }) {
    return (
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          <Typography variant="h6" component="div" gutterBottom>
            Customer Address
          </Typography>
          <DialogContentText>
            {details && formatAddress(details.customer_address)}
          </DialogContentText>
          <Typography variant="h6" component="div" gutterBottom>
            Restaurant Addresses
          </Typography>
          <List dense>
            {details && details.restaurant_address.map((addresses, index) => (
              <React.Fragment key={index}>
                {Object.entries(addresses).map(([key, value]) => (
                  <ListItem key={key}>
                    <ListItemText primary={<AddressDetails title={key} address={value} />} />
                  </ListItem>
                ))}
              </React.Fragment>
            ))}
          </List>
          <Typography variant="h6" component="div" gutterBottom>
            Number of Items
          </Typography>
          <DialogContentText>
            {details && details.numberOf_items}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  }

  function OrderDataGrid() {
    const [orders, setOrders] = useState([]);
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: '',
      severity: 'success',
    });
    // Define the state for the order details dialog
    const [orderDetailsDialog, setOrderDetailsDialog] = useState({
      open: false,
      orderDetails: null,
    });
  
    const handleCloseOrderDetailsDialog = () => {
      setOrderDetailsDialog({ ...orderDetailsDialog, open: false });
    };

    const handleRowClick = async (params, event) => {
        // Vérifie si le clic a été fait sur un élément qui n'est pas interactif
        if (event.target.type !== 'checkbox' && !event.target.closest('.MuiDataGrid-cell--editable')) {
          try {
            const details = await apiDelivery.getOrderDetails(params.id);
            setOrderDetailsDialog({
              open: true,
              orderDetails: details,
            });
          } catch (error) {
            setSnackbar({
              open: true,
              message: "Failed to fetch order details.",
              severity: "error",
            });
          }
        }
      };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackbar({ ...snackbar, open: false });
      };
  
    async function handleRowUpdate(row, oldRow) {
      // Handle row updates logic here...
    }

    const handleProcessRowUpdateError = (error) => {
        // Affiche un message d'erreur à l'utilisateur
        setSnackbar({
          open: true,
          message: 'Failed to update the order: ' + (error.message || 'Unknown error'),
          severity: 'error',
        });
      };
  
    useEffect(() => {
      const getOrders = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
        apiDelivery.setAuthToken(token);
        const data = await apiDelivery.listOrders();
        const adaptedData = data.map(order => ({
          ...order,
          isValidated: order.isAccepted,
          isRefused: order.isRefused,
        }));
        setOrders(adaptedData);
      };
  
      getOrders();
    }, []);
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flexGrow: 1 }}>
        <DataGrid
        rows={orders}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row.id}
        onRowClick={(params, event) => handleRowClick(params, event)}
        processRowUpdate={handleRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        experimentalFeatures={{ newEditingApi: true }}
      />
          <OrderDetailsDialog
            open={orderDetailsDialog.open}
            onClose={handleCloseOrderDetailsDialog}
            details={orderDetailsDialog.orderDetails}
          />
          <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
              {snackbar.message}
            </Alert>
          </Snackbar>
        </div>
      </div>
    );
  }
  

const DeliveryHome = () => {
  return <OrderDataGrid />;
};

export default DeliveryHome;