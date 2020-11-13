import React from 'react';
import './index.css'

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Flecha from '../../components/flecha'
import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';
import wordlogo from '../../assets/images/word.png';
import exlogo from '../../assets/images/excel.png';
import pplogo from '../../assets/images/powerpoint.png';
import gdlogo from '../../assets/images/googledrive.png';

import Slideshow from '../../components/slider';

function content() {
    return (
        <div>
            <Menu />
            <div className="contentbody">
                <Slideshow/>
            </div>
                <div className="content">
                    <div className="squares">
                        <a className="sqr1">
                            <div className="title">
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
                        </a>
                        <a className="sqr2">
                            <div className="title">
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
                        </a>
                        <a className="sqr3">
                            <div className="title2">
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
                        </a>
                        <a className="sqr4">
                            <div className="title2">
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
                        </a>
                    </div>
                </div>
            <Rodape />
        </div>
    );
}
export default content;