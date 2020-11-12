import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flecha from '../flecha'
import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';


import './index.css';

import wordlogo from '../../assets/images/word.png';

class Slideshow extends Component{
    render(){   
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
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
                        <p>Vídeo Intermediário II -</p>
                        <p>Edição de cabeçalho e rodápe, alteração no estilo do título.</p>
                        <p className="date">12/09/20</p>
                    </div>
                </div>
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
        </Slider>
    )
    }
}
export default Slideshow;