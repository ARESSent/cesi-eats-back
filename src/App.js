import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import Browse from "./Browse";
import Cart from "./Cart"; 
import Profile from "./Profile";
import LogIn from "./LogIn";
import SignIn from "./SignIn"; 

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
              <Route path="/" element={<Browse />} />
              <Route path="/Browse" element={<Browse />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/SignIn" element={<SignIn />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;