import React from 'react'
import logo from '../../assets/images/logo.png'
import ttlogo from '../../assets/images/twitter.png'
import ytlogo from '../../assets/images/youtube logo.png'
import fblogo from '../../assets/images/facebook logo.png'

import './index.css'

function Rodape(){
    return(
    <footer>
        <div className="footer">
            <div className="logo"><img src={logo}></img></div>
            <div className="itens">
                <h3><a>Inicio</a></h3>
                <ul>
                    <li><a>Conteúdo</a></li>
                    <li><a>Fórum</a></li>
                    <li><a>Sobre</a></li>
                </ul>
            </div>
            <div className="about">
                <h3><a>Sobre nós</a></h3>
                <p><a>Informática NA</a></p>
            </div>
            <div className="contact">
                <ul>
                    <h3><a>Contato</a></h3>
                    <li><a>(45) 999405679</a></li>
                    <li><a>aulainformatica134656@gmail.com</a></li>
                </ul>
            </div>
            <div className="social">
                <a><img id="tt" src={ttlogo}></img></a>
                <a><img id="yt" src={ytlogo}></img></a>
                <a><img id="fb" src={fblogo}></img></a>
            </div>
        </div>
        <div className="copyright">
            <p>© Copyright - Informática NA</p>
        </div>
    </footer>
    );
}

export default Rodape;
