import React from 'react';
import './index.css';
import '../../App.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';



function Menu(){

    return(
        <div className="menu">
            <div className="menu-left">
                <Link to="/">
                    <div className="menu-logo">
                        <img src={logo} alt="logo"></img>
                        <p>Informatica NA</p>
                    </div>
                </Link>
            </div>
            <nav>
                <div className="menu-right">
                    <ul className="menu-content">
                        <Link to="/">
                            <li>Inicio</li>
                        </Link>
                        <Link to="/forum">
                            <li>Forúm</li>
                        </Link>
                        <Link to="/conteudos">
                            <li>Conteúdos</li>
                        </Link>
                        <Link className="style-link" to="/sobre">
                            <li>Sobre</li>
                        </Link>
                        <Link className="style-link" to="/registro">
                            <li><button className="logout ani">Login</button></li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Menu;