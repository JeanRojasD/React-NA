import React from 'react'
import Vector from '../../assets/images/vector.png'
import './index.css'
import { useState } from 'react'

function Forumnew(props) {
    const [duvida, setDuvida] = useState("");
    const [title, setTitle] = useState("");
    function commentarSubmit(event) {
        event.preventDefault();
        console.log(title);
        console.log(duvida);
    }
    const commentTitle = (e) => {
        setTitle(e.target.value);
    }
    const commentDuvida = (e) => {
        setDuvida(e.target.value);
    }
    return (
        <div className="new-all">
            <div className="new-principal">
                <div className="new-imagem">
                    <img className="new-img" src={props.imagem} alt="imagem" />
                </div>
            </div>
            <div className="new-all2">
                <form onSubmit={commentarSubmit}>
                    <div className="new-title">
                        <input className="new-text" type="text" placeholder="Título" value={title} onChange={commentTitle} />
                    </div>
                    <div className="new-duvida">
                        <input className="new-text2" type="text" placeholder="Escreva sobre sua dúvida" value={duvida} onChange={commentDuvida} />
                    </div>
                    <div className="new-buttons">
                        <div className="new-cat">
                            <button>
                                <p>
                                    Adicionar categoria
                                </p>
                                <img className="new-seta" src={Vector} alt="seta" />
                            </button>
                        </div>
                        <div className="new-cc">
                            <div className="new-cancelar">
                                <button>Cancelar</button>
                            </div>
                            <div className="new-comentar">
                                <button type="submit" value="comentar">Comentar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forumnew;