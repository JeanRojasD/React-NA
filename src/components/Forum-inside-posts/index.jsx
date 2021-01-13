import React from "react"
import './index.css'

function Foruminside({comment}) {
    return (
        <div className="inside-all">
            <div className="inside-part1">
                <div className="inside-image">
                    {(comment.autor && comment.autor.imagem) && <img className="inside-img" src={comment.autor.imagem} alt="Imagem" />}
                </div>
            </div>
            <div className="inside-part2">
                <div className="inside-titulo">
                    <h3>{comment.titulo}</h3>
                </div>
                <div className="inside-texto">
                    <ul>
                        <li>
                           {comment.texto}
                        </li>
                    </ul>
                </div>
                <div className="inside-part3">
                    <div className="inside-nome">
                        <h4>{comment.autor?.nome}</h4>
                    </div>
                    <div className="inside-tempo">
                        <ul>
                            <li>
                                {comment.tempo}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Foruminside;