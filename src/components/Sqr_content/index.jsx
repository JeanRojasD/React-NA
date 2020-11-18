import React from 'react';
import wordlogo from '../../assets/images/word.png';
import exlogo from '../../assets/images/excel.png'
import pplogo from '../../assets/images/powerpoint.png';
import gdlogo from '../../assets/images/googledrive.png';
import { Link } from 'react-router-dom';
import './index.css';

function Sqr_content(){
    return(
        <div className="squares">
            <Link to="/Specifics" className="sqr1">
                    <div className="square-title">
                        <img src={wordlogo} alt="Word"></img>
                        <h1>Word</h1>
                    </div>
                    <div>
                        <ul>
                            <li>Vídeo</li>
                            <li>Apostila</li>
                            <li>Podcast</li>
                            <li>+</li>
                        </ul>
                    </div>
            </Link>
            <Link to="/Specific" className="sqr2">
                <div className="square-title">
                    <img src={exlogo} alt="Excel"></img>
                    <h1>Excel</h1>
                </div>
                <div>
                    <ul>
                        <li>Vídeo</li>
                        <li>Apostila</li>
                        <li>Podcast</li>
                        <li>+</li>
                    </ul>
                </div>
            </Link>
            <Link to="/Specific" className="sqr3">
                <div className="square-title">
                    <img src={gdlogo} alt="Google Drive"></img>
                    <h1>Google Drive</h1>
                </div>
                <div>
                    <ul>
                        <li>Vídeo</li>
                        <li>Apostila</li>
                        <li>Podcast</li>
                        <li>+</li>
                    </ul>
                </div>
            </Link>
            <Link to="/Specific" className="sqr4">
                <div className="square-title">
                    <img src={pplogo} alt="Power Point"></img>
                    <h1>Power Point</h1>
                </div>
                <div>
                    <ul>
                        <li>Vídeo</li>
                        <li>Apostila</li>
                        <li>Podcast</li>
                        <li>+</li>
                    </ul>
                </div>
            </Link>
        </div>
    );
}

export default Sqr_content;