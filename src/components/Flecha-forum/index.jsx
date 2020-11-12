import React from "react";
import './index.css'

function Flash(props){
const { onClick } = props;
return(
    <button className="botao" onClick={onClick}> 
        <img src={props.src}/>
    </button>
)
}
export default Flash;