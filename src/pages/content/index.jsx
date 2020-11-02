import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';
import wordlogo from '../../assets/images/word.png';
import sqrexcel from '../../assets/images/sqrexcel.png';
import sqrpp from '../../assets/images/sqrpp.png';
import sqrgd from '../../assets/images/sqrgd.png';
import sqrword from '../../assets/images/sqrword.png';

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
                    <div className="sqr1">
                        <a><img src={sqrword} alt="sqrword"></img></a>
                    </div>
                    <div className="sqr2">
                        <a><img src={sqrexcel} alt="sqrexcel"></img></a>
                    </div>
                    <div className="sqr3">
                        <a><img src={sqrgd} alt="sqrgd"></img></a>
                    </div>
                    <div className="sqr4">
                        <a><img src={sqrpp} alt="sqrpp"></img></a>
                    </div>
                </div>
            </div>
            <Rodape />
        </section>
    );
}
export default content;