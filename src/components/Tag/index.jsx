import React from 'react'
import './index.css'

function Tag(props){
    return( 
        <div className="tag-background">
            <button type="button" className="tag-button">
                <img src={props.imagem} alt={props.text}></img>
                <p>Discussão {props.text}</p>
            </button>
        </div>
    );    
}

export default Tag;