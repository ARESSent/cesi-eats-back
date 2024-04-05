import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Browse from "./Browse";
import Cart from "./Cart"; 
import Profile from "./Profile";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import "./App.css"

function App() {
  return (
      <Router>
        <main>
          <Routes>
              <Route path="/" element={<Browse />} />
              <Route path="/Browse" element={<Browse />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/LogIn" element={<LogIn />} />
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;