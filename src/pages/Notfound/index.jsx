import React from 'react'
import Header from '../../components/Header'
import found from '../../assets/images/not-found.png'
import './index.css'


function Notfound(){
    return(
        <div>
            <Header />
            <div className="notfound-page">
                <div className="notfound-text">
                    <h1> 404 </h1>
                    <h2>Pagina não encontrada</h2>
                    <p>UTILIZE O MENU ACIMA PARA NAVEGAR NOVAMENTE À NOSSAS PÁGINAS</p>
                </div>
                <img className="notfound-image" src={found} alt="ERROR 404"></img>
            </div>
        </div>

    );
}


export default Notfound;