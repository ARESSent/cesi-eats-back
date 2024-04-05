import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/Browse">Browse</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/LogIn">Log In</Link>
          </li>
          <li>
            <Link to="/SignIn">Sign In</Link>
          </li>
        </ul>
      </nav>     
    </footer>
  );
} 

export default Footer;