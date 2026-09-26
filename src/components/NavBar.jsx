import React from 'react';



//diseño
import './styles/navbar.css'

//clase
const NavBar = () => {
    return (
        <header className="header">
            <div className="logo-container">
                Axial Dental
            </div>
            <nav>
                <ul class="nav-container">
                    <li><a href="/">+52 618 --- ----</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
