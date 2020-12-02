import React from 'react';
import Slides from '../../assets/images/slides.svg';
import Videos from '../../assets/images/videos.svg';
import Books from '../../assets/images/books.svg';
import './index.css'

function Sqr_specifics(props){
    return(
        <div>
            <div className="sqrs_specs">
                <div style={props.style} onClick={props.act}>
                    <img src={Slides}></img>
                    <h1>Slides</h1>
                </div>
                <div style={props.style} onClick={props.act}>
                    <img src={Videos}></img>
                    <h1>Vídeos</h1>
                </div>
                <div style={props.style} onClick={props.act}>
                    <img src={Books}></img>
                    <h1>Apostilas</h1>
                </div>
            </div>
        </div>
    );
}
export default Sqr_specifics;