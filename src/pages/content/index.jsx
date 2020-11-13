import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import wordlogo from '../../assets/images/word.png';
import pplogo from '../../assets/images/powerpoint.png';
import gdlogo from '../../assets/images/googledrive.png';
import exlogo from '../../assets/images/excel.png'
import Slideshow from '../../components/Slider-Content';

import './index.css'

function Content() {
    return (
        <div>
            <Menu />
            <div className="contentbody">
                <Slideshow />
            </div>
            <div className="content">
                <div className="squares">
                    <a href="/" className="sqr1">
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
                    <a href="/" className="sqr2">
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
                    <a href="/" className="sqr3">
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
                    <a href="/" className="sqr4">
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
export default Content;