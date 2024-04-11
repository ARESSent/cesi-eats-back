import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation 
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Browse from "./Browse";
import Browsebycat from "./Browsebycat";
import Cart from "./Cart"; 
import Profile from "./Profile";
import Signin from "./SignIn";
import Login from "./LogIn";
import About from "./About";
import Orders from "./Orders";
import Wallet from "./Wallet";
import Settings from "./Settings";
import Help from "./Help";
import Account from "./Account";
import Restaurants from "./Restaurants";
import Checkout from "./Checkout";
import RestaurantDetail from "./RestaurantDetail";

const HeaderDynamic = () => {
  const location = useLocation(); 
  const titleMap = { // path in lowercase
    '/': 'Browse',
    '/browse': 'Browse',
    '/browsebycat': 'Restaurants',
    '/cart': 'Cart',
    '/profile': 'Account Informations',  
    '/signin': 'Create Account',
    '/login': 'Connexion',
    '/about': 'About Cesi Eats',
    '/orders': 'Order History',
    '/wallet': 'Wallet',
    '/settings': 'Privacy Settings',
    '/help': 'Help & Support',
    '/account': 'Profile',
    '/restaurants': 'Restaurants',
    '/checkout': 'Checkout',
    '/restaurantdetail': 'Restaurant Details'
  };
  const title = titleMap[location.pathname.toLowerCase()];
  return <Header title={title} />;
};


const theme = createTheme({
  typography: {
    fontFamily: '"UberMoveMedium", Arial, sans-serif',
    h4: {
      fontFamily: '"UberMoveBold", Arial, sans-serif'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <HeaderDynamic />
        <main>
          <Routes>
              <Route path="/" element={<Browse />} />
              <Route path="/Browse" element={<Browse />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/About" element={<About />} />
              <Route path="/Orders" element={<Orders />} />
              <Route path="/Wallet" element={<Wallet />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Restaurants" element={<Restaurants />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Browsebycat" element={<Browsebycat />} />
              <Route path="/RestaurantDetail" element={<RestaurantDetail />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      </ThemeProvider >
  );
}

export default App;