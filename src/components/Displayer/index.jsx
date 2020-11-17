import React from 'react';
import './index.css';

function Displayer(props) {
    return(
        <div className="lines">
            <ul>
                <li>{props.line_1}</li>
                <li>{props.line_2}</li>
                <li>{props.line_3}</li>
                <li>{props.line_4}</li>
                <li>{props.line_5}</li>
            </ul>
        </div>
    );
    }
export default Displayer;