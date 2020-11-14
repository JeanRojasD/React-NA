import React from 'react';
import './index.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';



function Menu(){

    return(
        <div className="Hope">
            <div className="esquerda">
                <a className="nainfor" href="/"><img src={logo} alt="logo"></img></a> 
                <a className="logo" href="/">Informatica NA</a>
            </div>
            <nav>
                <ul className="items">
                    <Link to="/">
                        <li className="menustyle">Inicio</li>
                    </Link>
                    <Link to="/forum">
                        <li className="menustyle">Forúm</li>
                    </Link>
                    <Link to="/conteudos">
                        <li className="menustyle">Conteúdos</li>
                    </Link>
                    <Link to="/sobre">
                        <li className="menustyle">Sobre</li>
                    </Link>
                    <Link to="/registro">
                        <li className="menustyle"><button className="logout ani">Login</button></li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;