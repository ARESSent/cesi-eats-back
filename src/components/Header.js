import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/cesi_eats_BLUEBG.png';

const Header = ({ title }) => {
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/'); 
    };
    return (
        <header>
            <img src={logo} alt="CESI EATS" className="logo" onClick={handleClickLogo} /> 
            <h1>{title}</h1>
        </header>
    );
}
  
export default Header;
