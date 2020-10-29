import React from 'react'
import './index.css'
import Menu from '../../components/Menu'

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
                <div className="Login"><a href="/">Registre-se</a></div>
                <div className="Nocont"><a href="/">Login</a></div>
            </div>
        </div>
        </div>
    );
}

export default Home;