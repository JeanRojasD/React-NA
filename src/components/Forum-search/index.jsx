import React from 'react'
import './index.css'

function Search() {
    return(
        <div className="search-content">
            <div className="search-up">
                <h1>Bem vindo ao Forúm NA</h1>
                <h2>O Forum para tirar suas dúvidas sobre informática básica</h2>
                <div className="search-search">
                    <label><input className="search-text" type="text" name="Name" placeholder="Qual sua dúvida de hoje?" /></label>
                    <button type="button" className="button-forum">Buscar...</button>
                </div>
            </div>
        </div>
    );
}
export default Search;