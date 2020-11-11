import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';


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
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Forúm</a></li>
                    <li><a href="/">Conteúdos</a></li>
                    <li><a href="/">Sobre</a></li>
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