import React from 'react';
import './styles/navbar.css';

const NavBar = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <span>Axial Dental</span>
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