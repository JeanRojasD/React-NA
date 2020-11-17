import React from 'react';
import './index.css'

function Sqr_specifics(props){
    return(
        <div className="sqrspecific">
                <a><img src={props.src}></img></a>
                <a><img src={props.src2}></img></a>
                <a><img src={props.src3}></img></a>
        </div>
    );
}
export default Sqr_specifics;