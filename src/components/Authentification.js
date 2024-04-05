import axios from 'axios';

const Authentification = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3001/services/auth/authService', {
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token); 
      return true; 
    }
    return false; 
  } catch (error) {
    throw error;
  }
};

export const AuthService = {
  Authentification,
};