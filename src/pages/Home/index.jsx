import React from 'react'
import './index.css'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className="home-content">
        <Header />
        <div className="home-section">
            <div className="home-animation">
                <div className="home-text">
                    <h2>Não fique para trás, evolua com NA informática.</h2>
                    <p>PARA TER UMA EXERIÊNCIA COM VIDEO, APOSTILAS, PODCASTS E MUITO MAIS</p>
                </div>
                <div className="home-buttons">
                    <div className="home-register"><Link to="/registro"><button type="button" className="clicaveis click">Registro</button></Link></div>
                    <div className="home-login"><Link to="/registro"><button type="button" className="clicaveis click">Login</button></Link></div>
                </div>
            </div>    
        </div>
        <Rodape />
        </div>
    );
}

export default Home;