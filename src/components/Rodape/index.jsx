import React from 'react'
import './index.css'

function Rodape(){
    return(
    <footer>
        <div className="footer">
            <div className="logo"><img src="../../assets/images/logo.png"></img></div>
            <div className="itens">
                <h3><a>Inicio</a></h3>
                <ul>
                    <li><a>Conteúdo</a></li>
                    <li><a>Fórum</a></li>
                    <li><a>Sobre</a></li>
                </ul>
            </div>
            <div className="about">
                <h3>Sobre nós</h3>
                <p>Informática NA</p>
            </div>
            <div className="contact">
                <ul>
                    <h3><a>Contato</a></h3>
                    <li><a>(45) 999405679</a></li>
                    <li><a>aulainformatica134656@gmail.com</a></li>
                </ul>
            </div>
            <div className="social">
                <a><img src="../../assets/images/twitter logo.png"></img></a>
                <a><img src="../../assets/images/youtube logo.png"></img></a>
                <a><img src="../../assets/images/facebook logo.png"></img></a>
            </div>
        </div>
        <div className="copyright">
            <p>© Copyright - Informática NA</p>
        </div>
    </footer>
    );
}

export default Rodape;
