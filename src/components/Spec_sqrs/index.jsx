import React from 'react';
import './index.css'

function Spec_sqrs(props){
    return(
        <div className="specsqrs">
                <a><img src={props.src}></img></a>
                <a><img src={props.src2}></img></a>
                <a><img src={props.src3}></img></a>
        </div>
    );
}
export default Spec_sqrs;