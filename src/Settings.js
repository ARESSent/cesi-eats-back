import React, { useEffect, useState } from 'react';
import { Box, Typography, Switch, FormControlLabel, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import api from './components/api.js';

const Settings = () => {
  const [deleteAccountDialogOpen, setDeleteAccountDialogOpen] = useState(false);
  const [dataSharing, setDataSharing] = useState(true);
  const [receiveEmails, setReceiveEmails] = useState(true);
  const [userID, setUserId] = useState('');

  const openDeleteAccountDialog = () => {
    setDeleteAccountDialogOpen(true);
  };

  const closeDeleteAccountDialog = () => {
    setDeleteAccountDialogOpen(false);
  };

  useEffect(() => {
    const fetchProfileInfo = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const profileData = await api.getProfile(token);
          if (profileData) {
            setUserId(profileData.id);
          }
        } catch (error) {
          console.error("Error fetching profile information:", error);
        }
      }
    };

    fetchProfileInfo();
  }, []);

  const handleDataSharingToggle = () => {
    setDataSharing(!dataSharing);
  };

  const handleReceiveEmailsToggle = () => {
    setReceiveEmails(!receiveEmails);
  };

  const handleDeleteAccount = () => {
    api.deleteUser(localStorage.getItem('token'), userID);
    closeDeleteAccountDialog();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: 4 }}>
        <FormControlLabel
          control={<Switch checked={dataSharing} onChange={handleDataSharingToggle} />}
          label="Allow Data Sharing for Research"
        />
        <FormControlLabel
          control={<Switch checked={receiveEmails} onChange={handleReceiveEmailsToggle} />}
          label="Receive Promotional Emails"
        />
        <Box sx={{ marginTop: 2 }}>
          <Button variant="outlined" color="error" onClick={openDeleteAccountDialog}>
            Delete Account
          </Button>
        </Box>
        <Typography sx={{ mt: 4, mb: 2 }} paragraph>
          In today's digital age, the privacy and security of your personal data are paramount. At Cesi Eats, we are deeply committed to safeguarding the confidentiality of the information you entrust to us. Our approach to data privacy is built on transparency, control, and security. We believe that you should have full understanding and control over your data. Therefore, we provide clear options for managing your privacy preferences and consent.
          Our privacy policy is designed to inform you about the types of data we collect, how we use it, and with whom we share it. It also outlines your rights regarding your personal information and how you can exercise them. We implement state-of-the-art security measures to protect your data against unauthorized access, alteration, and destruction.
          We only collect data that is necessary for the delivery of our services and enhance your user experience. We never sell your data to third parties, and any data sharing for research or improvement purposes is conducted with the highest standards of anonymity and confidentiality.
          Your trust is our top priority, and we are continually updating our practices and policies to ensure the highest level of privacy protection. Remember, you have the control to modify your data preferences at any time through our privacy settings. At Cesi Eats, we're more than just a service; we're a community that respects and upholds the privacy of every member.
        </Typography>
      </Box>

      <Dialog
        open={deleteAccountDialogOpen}
        onClose={closeDeleteAccountDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting your account is irreversible and will remove all your data. Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteAccountDialog}>Cancel</Button>
          <Button onClick={handleDeleteAccount} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Settings;
