import React from 'react'
import './index.css'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className="fundo">
        <Menu />
        <div className="inicio">
            <div className="animation">
                <div className="texto">
                    <h2>Não fique para trás, evolua com NA informática.</h2>
                    <p>PARA TER UMA EXERIÊNCIA COM VIDEO, APOSTILAS, PODCASTS E MUITO MAIS</p>
                </div>
                <div className="conjunto">
                    <div className="register"><Link to="/registro"><Button text="Registre-se" /></Link></div>
                    <div className="login"><Link to="/registro"><Button text="Login" /></Link></div>
                </div>
            </div>    
        </div>
        <Rodape />
        </div>
    );
}

export default Home;