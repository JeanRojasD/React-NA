import React from "react"
import './index.css'

function Forum_inside(props) {
    return (
        <div className="inside-all">
            <div className="inside-part1">
                <div className="inside-image">
                    <img className="inside-img" src={props.imagem} alt="Imagem" />
                </div>
            </div>
            <div className="inside-part2">
                <div className="inside-titulo">
                    <h3>{props.titulo}</h3>
                </div>
                <div className="inside-texto">
                    <ul>
                        <li>
                            Basicamente o JSON se baseia na notação NOME : VALOR, onde NOME pode ser o nome que você deseja usar para identificar um objeto e VALOR o valor deste objeto. Em JSON os valores usados podem ser: Um número (inteiro ou ponto flutuante) Uma string (entre aspas)
                    </li>
                    </ul>
                </div>
                <div className="inside-part3">
                    <div className="inside-nome">
                        <h4>{props.nome}</h4>
                    </div>
                    <div className="inside-tempo">
                        <ul>
                            <li>
                                {props.tempo}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Forum_inside;