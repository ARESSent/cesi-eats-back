import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Typography  } from '@mui/material';
import logo from '../images/cesi_eats_BLUEBG.png';

const Header = ({ title }) => {
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/'); 
    };
    return (
        <header>
            <img src={logo} alt="CESI EATS" className="logo" onClick={handleClickLogo} /> 
            <Typography ml={2} display='flex' alignItems='center' variant='h4'>{title}</Typography>
        </header>
    );
}
  
export default Header;
