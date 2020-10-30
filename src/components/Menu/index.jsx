import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/images/logo.png';

function Menu(){
    const [loged,setLoged]=useState(false);
    return(
        <div className="Hope">
            <div className="esquerda">
                <a className="img" href="/"><img src={logo} alt="logo"></img></a> 
                <a className="logo" href="/">Informatica NA</a>
            </div>
            <nav>
                <ul className="items">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Forúm</a></li>
                    <li><a href="/">Conteúdos</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li>
                    {loged&&(<p>logado</p>)}
                    {!loged&&(
                        <li><button className="login" onClick={()=>setLoged(!loged)}>Login</button></li>
                    )}
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Menu;