import React from 'react';
import './index.css';

function Displayer(props) {
    return(
        <div className="lines">
            <ul>
                {!props.list && 
                    <li>Sem conteudos disponiveis</li>
                }
                {props.list.map(item => <li key={item.id} >{item.content}</li> )}
            </ul>
        </div>
    );
    }
export default Displayer;