import React from 'react'
import './index.css'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import Button from '../../components/Button'



function Home(){
    return(
        <div className="fundo">
        <Menu />
        <div className="inicio">
            <div className="texto">
                <h2>Não fique para trás, evolua com NA informática.</h2>
                <p>PARA TER UMA EXERIÊNCIA COM VIDEO, APOSTILAS, PODCASTS E MUITO MAIS</p>
            </div>
            <div className="clicaveis">
                <div className="register"><Button text="Registre-se" /></div>
                <div className="login"><Button text="Login" /></div>
            </div>
        </div>
        <Rodape />
        </div>
    );
}

export default Home;