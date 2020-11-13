import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';
import { Link } from 'react-router-dom';



function Menu(){
    const [loged,setLoged]=useState(false);
    return(
        <div className="Hope">
            <div className="esquerda">
                <a className="nainfor" href="/"><img src={logo} alt="logo"></img></a> 
                <a className="logo" href="/">Informatica NA</a>
            </div>
            <nav>
                <ul className="items">
                    <Link to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link to="/forum">
                        <li>Forúm</li>
                    </Link>
                    <Link to="/content">
                        <li>Conteúdos</li>
                    </Link>
                    <Link to="/sobre">
                        <li>Sobre</li>
                    </Link>
                    <li>
                    {loged&&(
                        <div className="userasset">
                            <div className="user"><img src={user} alt="logo"></img></div>
                            <p>Rogerio Maria</p>    
                        </div>
                    )}
                    {!loged&&(
                        <li><button className="logout ani" onClick={()=>setLoged(!loged)}>Login</button></li>
                    )}
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Menu;