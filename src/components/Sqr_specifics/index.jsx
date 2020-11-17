import React from 'react';
import './index.css'

function Sqr_specifics(props){
    return(
        <div className="squaresalign">
            <div className="specsqrs">
                    <a><img src={props.src}></img></a>
                    <a><img src={props.src2}></img></a>
                    <a><img src={props.src3}></img></a>
            </div>
        </div>
    );
}
export default Sqr_specifics;