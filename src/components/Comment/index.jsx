import React from 'react'
import './index.css'
function Post(props) {
    return (
        <div className="caixa-de-comentario item">
            <a href="/">
            <div className="call">
                <div className="foto">
                </div>
                <div className="item">
                    <li className="data">{props.nome}</li>
                </div>
                <div className="item">
                    <li className="titulo">{props.titulo}</li>
                </div>
                <div className="item">
                    <li className="data">{props.data}</li>
                </div>
            </div>
            </a>
        </div>
    )
}
export default Post;