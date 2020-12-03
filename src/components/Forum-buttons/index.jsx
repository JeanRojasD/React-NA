import React from 'react'
import vector from '../../assets/images/vector.png'
import './index.css'

function Buttonsearch(){
    return(
        <div className="buttons-content">
            <div className="buttons-discution">
                <button type="button" className="button-start">Comece uma discussão</button>
                <button type="button" className="button-post">
                    <p>Últimas Postagens</p>
                    <img src={vector} alt="seta"></img>
                </button>
            </div>
        </div>
    );
}
export default Buttonsearch;