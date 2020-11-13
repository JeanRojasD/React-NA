import React from 'react';
import './index.css'

function Flecha(props) {
    const { onClick } = props;
    return (
        <button className={"arrow"} onClick={onClick}><img src={props.src}></img></button>
    );
}


export default Flecha;