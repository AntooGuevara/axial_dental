import React from 'react';
//logo
import logo from './logo.png';

//diseño
import './styles/navbar.css'

//clase
const NavBar = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul class="nav-container">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Servicios</a></li>
                    <li><a href="/">Dirección</a></li>
                    <li><a href="/">Solicitar Cita</a></li>
                    <li><a href="/">Contactanos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
