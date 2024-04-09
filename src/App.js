import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation 
} from "react-router-dom";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Browse from "./Browse";
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
import Restaurants from "./Restaurants"

const HeaderDynamic = () => {
  const location = useLocation(); 
  const titleMap = { // path in lowercase
    '/': 'Browse',
    '/browse': 'Browse',
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
    '/restaurants': 'Restaurants'
  };
  const title = titleMap[location.pathname.toLowerCase()];
  return <Header title={title} />;
};

function App() {
  return (
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
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;