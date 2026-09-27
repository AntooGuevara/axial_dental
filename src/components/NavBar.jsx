import React from 'react';
import './styles/navbar.css';
import logo from './images/logo_sin_fondo.png';


const NavBar = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>

            <nav>
                <ul className="nav-container">
                    <li>
                        <a href="/">+52 618 --- ----</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;