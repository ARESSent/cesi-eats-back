import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation 
} from "react-router-dom";
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer";
import Browse from "./Browse";
import Cart from "./Cart"; 
import Profile from "./Profile";
import Signin from "./Signin";
import Login from "./Login";
import About from "./About"
import Orders from "./Orders"
import Wallet from "./Wallet"
import Settings from "./Settings"
import Help from "./Help"
import Account from "./Account"

const HeaderDynamic = () => {
  const location = useLocation(); 
  const titleMap = { // path in lowercase
    '/': 'Cesi Eats',
    '/browse': 'Cesi Eats',
    '/cart': 'Cart',
    '/profile': 'Profile',  
    '/signin': 'Create Account',
    '/login': 'Connexion',
    '/about': 'About Cesi Eats',
    '/orders': 'Orders',
    '/wallet': 'Wallet',
    '/settings': 'Privacy Settings',
    '/help': 'Help & Support',
    '/account': 'Account Information'
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
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;