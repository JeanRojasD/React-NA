import React from 'react';
import './index.css'

function Flecha(props) {
    return (
        <button className="arrow"><img src={props.img}></img></button>
    );
    }
export default Flecha;