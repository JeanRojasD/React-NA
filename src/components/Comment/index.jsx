import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
function Post(props) {
    return (
        <div className="caixa-de-comentario item">
            <Link to="/forumposts">
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
            </Link>
        </div>
    )
}
export default Post;