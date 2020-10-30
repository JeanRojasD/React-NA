import React from 'react';
import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';
import wordlogo from '../../assets/images/word.png';
import sqrexcel from '../../assets/images/sqrexcel.png';
import sqrpp from '../../assets/images/sqrpp.png';
import sqrgd from '../../assets/images/sqrgd.png';
import sqrword from '../../assets/images/sqrword.png';

import './index.css'

function content(){
    return(
        <section>
            <div className="slide">
                <div className="slideshow">
                    <div className="arrowl">
                        <img src={arrowl}></img>
                    </div>
                    <div className="text">
                        <div className="wordlogo">
                            <img src={wordlogo}></img>
                            <p>Word</p>
                        </div>
                        <div className="subtext">
                            <p>Vídeo Intermediário II -</p>
                            <p>Edição de cabeçalho e rodápe, alteração no estilo do título.</p>
                            <p className="date">12/09/20</p>
                        </div>
                    </div>
                    <div className="arrowr">
                        <img src={arrowr}></img>
                    </div>
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
                    <div className="sqr1">
                        <a><img src={sqrword}></img></a>
                    </div>
                    <div className="sqr2">
                        <a><img src={sqrexcel}></img></a>
                    </div>
                    <div className="sqr3">
                        <a><img src={sqrgd}></img></a>
                    </div>
                    <div className="sqr4">
                        <a><img src={sqrpp}></img></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default content;