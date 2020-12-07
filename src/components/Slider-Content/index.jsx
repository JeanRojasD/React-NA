import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flecha from '../Flecha-content';
import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';
import wordlogo from '../../assets/images/word.png';
import exlogo from '../../assets/images/excel.png';
import pplogo from '../../assets/images/powerpoint.png';
import gdlogo from '../../assets/images/googledrive.png';

import './index.css';

class Slideshow extends Component{
    render(){   
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed:6000,
            infinite:true,
            dots:true,
            className:"Slides",
            nextArrow: <Flecha src={arrowr}/>,
            prevArrow: <Flecha src={arrowl} />,
        };
    return (
        <Slider {...settings}>
                <div className="text">
                    <div className="wordlogo">
                        <img src={wordlogo} alt="wordlogo"></img>
                        <p>Word</p>
                    </div>
                    <div className="subtext">
                        <p>Vídeo Intermediário 2 -</p>
                        <p>Estilização de objetos.</p>
                        <p className="date">12/09/20</p>
                    </div>
                </div>
                <div className="text2">
                    <div className="exlogo">
                        <img src={exlogo} alt="exlogo"></img>
                        <p>Excel</p>
                    </div>
                    <div className="subtext">
                        <p>Vídeo Iniciante 4 -</p>
                        <p>Edição de cabeçalho e rodápe com alteração de estilos.</p>
                        <p className="date">30/11/20</p>
                    </div>
                </div>
                <div className="text3">
                    <div className="pplogo">
                        <img src={pplogo} alt="pplogo"></img>
                        <p>PowerPoint</p>
                    </div>
                    <div className="subtext">
                        <p>Slide Iniciante 6 -</p>
                        <p>Dicas para criar um slide inteligente e organizado.</p>
                        <p className="date">05/02/20</p>
                    </div>
                </div>
                <div className="text4">
                    <div className="gdlogo">
                        <img src={gdlogo} alt="gdlogo"></img>
                        <p>Google Drive</p>
                    </div>
                    <div className="subtext">
                        <p>Apostila Google Drive -</p>
                        <p>Adicionada apostila completa do Google Drive</p>
                        <p className="date">30/12/20</p>
                    </div>
                </div>
        </Slider>
    )
    }
}
export default Slideshow;