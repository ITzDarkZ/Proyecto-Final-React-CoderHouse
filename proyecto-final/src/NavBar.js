import React from 'react';
import CartWidget from './CartWidget'
import './style.css';

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-header">
                    <a href="/index" className="navbar-brand"><p>Alejo Sequione</p></a>
                </div>
                <ul className="navbar-list">
                    <li className="active"><a href="/index">Inicio</a></li>
                    <li><a href="/info">Info</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <CartWidget/>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
