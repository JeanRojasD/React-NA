import React from 'react'
import './index.css'
import {useState} from 'react'
import Comments from '../../data/comments.json'


function Insideposts(props) {
    const [comentario, setComentario] = useState("");
    const [comments, setComments] = useState(Comments)

    function comentarioSubmit(event) {
        const commentComentario = {
            comentario: comentario
        }
        setComments([...comments,commentComentario])
        console.log(comments)
        console.log(commentComentario)
        event.preventDefault();

    }
    
    return (
        <div className="comment-all">
            <div className="comment-part1">
                <div className="comment-imagem">
                    <img className="comment-img" src={props.imagem} alt="usuario" />
                </div>
            </div>
            <div className="comment-part2">
                <form onSubmit={comentarioSubmit}>
                    <div className="comment-commentario">
                        <input className="comment-text" type="text" value={comentario} onChange={e => setComentario(e.target.value)}/>
                    </div>
                    <div className="comment-part3">
                        <div className="comment-cancelar">
                            <button className="comment-ca">Cancelar</button>
                        </div>
                        <div className="comment-comentar">
                            <button className="comment-co">Comentar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Insideposts;