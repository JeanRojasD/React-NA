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
            <div className="logo"><img src={logo} alt="logo"></img></div>
            <div className="itens">
                <h3><a href="/">Inicio</a></h3>
                <ul>
                    <li><a href="/">Conteúdo</a></li>
                    <li><a href="/">Fórum</a></li>
                    <li><a href="/">Sobre</a></li>
                </ul>
            </div>
            <div className="about cinza">
                <h3>Sobre nós</h3>
                <p>Informática NA</p>
            </div>
            <div className="contact cinza">
                <ul>
                    <h3>Contato</h3>
                    <li>(45) 999405679</li>
                    <li>aulainformatica134656@gmail.com</li>
                </ul>
            </div>
            <div className="social">
                <a href="/"><img id="tt" src={ttlogo} alt="twitter"></img></a>
                <a href="/"><img id="yt" src={ytlogo} alt="youtube"></img></a>
                <a href="/"><img id="fb" src={fblogo} alt="facebook"></img></a>
            </div>
        </div>
        <div className="copyright">
            <p>© Copyright - Informática NA</p>
        </div>
    </footer>
    );
}

export default Rodape;
