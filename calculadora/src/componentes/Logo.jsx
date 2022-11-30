import React from "react";
import '../hojas-de-estilo/Logo.css'
import logo from '../imagenes/freecodecamp-logo.jpg'

const Logo = () => (
    <img 
        src={logo} 
        alt="logo freecodecamp" 
        className='freecodecamp-logo' 
    />
);

export default Logo;