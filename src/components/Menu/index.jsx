import React from 'react';
import './index.css';

function Menu(){
    return(
        <div className="Hope">
            <a className="logo" href="">Informatica NA</a>
            <ul className="items">
                <li><a href="#">INICIO</a></li>
                <li><a href="#">CONTEÚDOS</a></li>
                <li><a href="#">FORÚM</a></li>
                <li><a href="#">SOBRE</a></li>
                <li><a className="login" href="#">LOGIN</a></li>
            </ul>
        </div>
    );
}

export default Menu;