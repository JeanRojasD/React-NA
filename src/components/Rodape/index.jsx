import React from 'react'
import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter.png'
import facebook from '../../assets/images/facebook.png'
import youtube from '../../assets/images/youtube.png'
import { Link } from 'react-router-dom'

import './index.css'

function Rodape(){
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="footer-menu">
                    <ul className="footer-list">
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
                    </ul>
                </div>
                <div className="footer-about">
                    <h4>Sobre Nós</h4>
                    <p>Informatica NA</p>
                </div>
                <div className="footer-contacts">
                    <h3>Contato</h3>
                    <ul>
                        <li>(45) 999405679</li>
                        <li>aulainformatica134656@gmail.com</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <img src={facebook} alt="facebook"></img>
                    <img src={twitter} alt="twitter"></img>
                    <img src={youtube} alt="youtube"></img>
                </div>
            </div>
        <div className="footer-copyright">
            <p>© Copyright - NACORP</p>
        </div>    
        </div>
    );
}

export default Rodape;
