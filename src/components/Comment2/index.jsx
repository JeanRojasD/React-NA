import React from 'react'
import Botaopop3 from '../Botao-comentar-forum2';
import './index.css'
function Pg2(props){
    return(
        <div className="caixa-de-comentarioo itemm">
        <div className="call2">
            <div className="fotoo">
            </div>
            <div className="itemm">
                <li className="nomee">{props.nome}</li>
            </div>
            <div className="itemm">
                <li className="tituloo">{props.titulo}</li>
            </div>
            <div className="itemm">
                <li className="dataa">{props.data}</li>
            </div>
            <Botaopop3/>
            <div className="itemm">
                <li className="lk"><img src={props.like} alt="like"/></li>
            </div>
            <div className="itemm">
                <button className="dk"><img src={props.deslike} alt="deslike"/></button>
            </div>
        </div>
    </div>
    )

}
export default Pg2;