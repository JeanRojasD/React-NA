import React from 'react';
import './index.css'

function Summary(props){
    return(
        <div className="page">
            <div className="sumlogo">
                <img src={props.src} alt="logo"></img>
            </div>
            <div className="summary">
                <p>{props.text}</p>
            </div>
        </div>
    );
}
export default Summary;