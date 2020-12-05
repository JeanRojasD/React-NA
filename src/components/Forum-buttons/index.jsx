import React from 'react'
import vector from '../../assets/images/vector.png'
import './index.css'
import { Link } from 'react-router-dom';
function Buttonsearch(){
    return(
        <div className="buttons-content">
            <div className="buttons-discution">
                <Link to="/forum_comment_new"> <button type="button" className="button-start">Comece uma discussão</button> </Link>
                <button type="button" className="button-post">
                    <p>Últimas Postagens</p>
                    <img src={vector} alt="seta"></img>
                </button>
            </div>
        </div>
    );
}
export default Buttonsearch;