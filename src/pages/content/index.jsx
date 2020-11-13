import React from 'react';

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Flecha from '../../components/flecha'
import wordlogo from '../../assets/images/word.png';
import pplogo from '../../assets/images/powerpoint.png';
import gdlogo from '../../assets/images/googledrive.png';

import Slideshow from '../../components/Slider-Content';

import './index.css'

function Content() {
    return (
        <div>
            <Menu />
            <div className="slide">
                <ul class="slider">
                    <li>
                        <input type="radio" id="slide1" name="slide" checked></input>
                        <Flecha for="slide1"></Flecha>
                        <div className="text">
                            <div className="wordlogo">
                                <img src={wordlogo} alt="wordlogo"></img>
                                <p>Word</p>
                            </div>
                            <div className="subtext">
                                <p>Vídeo Intermediário II -</p>
                                <p>Edição de cabeçalho e rodápe, alteração no estilo do título.</p>
                                <p className="date">12/09/20</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type="radio" id="slide2" name="slide"></input>
                        <Flecha for="slide2"></Flecha>
                        <div className="text">
                            <div className="wordlogo">
                                <img src={wordlogo} alt="wordlogo"></img>
                                <p>Excel</p>
                            </div>
                            <div className="subtext">
                                <p>Vídeo Iniciante III -</p>
                                <p>Formatação de Textos</p>
                                <p className="date">28/11/20</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <input type="radio" id="slide3" name="slide"></input>
                        <Flecha for="slide3"></Flecha>
                        <div className="text">
                            <div className="wordlogo">
                                <img src={wordlogo} alt="wordlogo"></img>
                                <p>PowerPoint</p>
                            </div>
                            <div className="subtext">
                                <p>Podcast Episódio 35 -</p>
                                <p>Ferramentas UX</p>
                                <p className="date">30/12/20</p>
                            </div>
                        </div>
                    </li>
                </ul>
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
export default Content;