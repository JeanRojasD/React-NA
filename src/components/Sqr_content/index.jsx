import React from 'react';
import doc from '../../assets/images/doc.svg';
import tab from '../../assets/images/tab.svg';
import pre from '../../assets/images/pre.svg'
import paste from '../../assets/images/paste.svg';
import { Link } from 'react-router-dom';
import './index.css';

function Sqr_content(){
    return(
        <div className="squares">
            <Link to="/word" className="sqr1">
                    <div className="square-title">
                        <img src={doc} alt="Word"></img>
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
            <Link to="/excel" className="sqr2">
                <div className="square-title">
                    <img src={tab} alt="Excel"></img>
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
            <Link to="/googledrive" className="sqr3">
                <div className="square-title">
                    <img src={paste} alt="Google Drive"></img>
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
            <Link to="/powerpoint" className="sqr4">
                <div className="square-title">
                    <img src={pre} alt="Power Point"></img>
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