import React from 'react'
import Vector from '../../assets/images/vector.png'
import './index.css'

function Forum_new(props) {
    return (
        <div className="new-all">
            <div className="new-principal">
                <div className="new-imagem">
                    <img className="new-img" src={props.imagem} alt="imagem" />
                </div>
            </div>
            <div className="new-all2">
                <div className="new-title">
                    <input className="new-text" type="text" placeholder="Título"/>
                </div>
                <div className="new-duvida">
                <input className="new-text2" type="text" placeholder="Escreva sobre sua dúvida"/>
                </div>
                <div className="new-buttons">
                    <div className="new-cat">
                        <button>
                            <p>
                                Adicionar categoria
                            </p>
                            <img className="new-seta" src={Vector} alt="seta"/>
                        </button>
                    </div>
                    <div className="new-cc">
                        <div className="new-cancelar">
                            <button>Cancelar</button>
                        </div>
                        <div className="new-comentar">
                            <button>Comentar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum_new;