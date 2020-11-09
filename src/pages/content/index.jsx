import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Flecha from '../../components/flecha'

import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';
import wordlogo from '../../assets/images/word.png';
import excellogo from '../../assets/images/excel.png';
import pplogo from '../../assets/images/powerpoint.png';
import gdlogo from '../../assets/images/googledrive.png';

import './index.css'

function content() {
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
            <Rodape />

        </div>
    );
}
export default content;