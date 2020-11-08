import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';
import wordlogo from '../../assets/images/word.png';
import excellogo from '../../assets/images/excel.png';
import pplogo from '../../assets/images/powerpoint.png';
import gdlogo from '../../assets/images/googledrive.png';

import './index.css'

function Flecha(props){
    return <button className="arrow"><img src={props.img}></img></button>
}
function content(){
    return(
        <section>
            <Menu />
            <div className="slide">
                <div className="slideshow">
                    <Flecha img={arrowl} />
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
                    <Flecha img={arrowr} />
                </div>
                <div className="points">
                    <div className="pt1"></div>
                    <div className="pt2"></div>
                    <div className="pt3"></div>
                    <div className="pt4"></div>
                </div>
            </div>
            <div className="content">
                <div className="squares">
                    <a className="sqr1">
                        <div className="title">
                            <img src={wordlogo} alt="Word"></img>
                            <h1>Word</h1>
                        </div>
                        <div>
                            <ul className="color">
                                <li>Vídeo</li>
                                <li>Apostila</li>
                                <li>Podcast</li>
                                <li>+</li>
                            </ul>
                        </div>
                    </a>
                    <a className="sqr2">
                        <div className="title">
                            <img src={excellogo} alt="Excel"></img>
                            <h1>Excel</h1>
                        </div>
                        <div>
                            <ul className="color">
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
                            <ul className="color">
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
                            <ul className="color">
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
        </section>
    );
}
export default content;