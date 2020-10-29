import React from 'react';
import './index.css';
import logo from '../../assets/images/logo.png';

function Menu(){
    return(
        <div className="Hope">
            <div className="esquerda">
                <a className="img" href="/"><img src={logo}></img></a> 
                <a className="logo" href="/">Informatica NA</a>
            </div>
            <nav>
                <ul className="items">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Forúm</a></li>
                    <li><a href="/">Conteúdos</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a className="login" href="/">Login</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;