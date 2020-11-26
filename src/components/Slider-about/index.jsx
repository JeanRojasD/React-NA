import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';
import jean from '../../assets/images/jean.jpg';
import Flecha from '../Flecha-content';
import './index.css';

class Aboutslider extends Component{
    render(){
        const aboutsettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 60000,
            infinite:true,
            dots:true,
            nextArrow: <Flecha aboutclass="about" src={arrowr}/>,
            prevArrow: <Flecha aboutclass="about" src={arrowl} />,
            className:"about-slider",
        };

    return(
        <Slider {...aboutsettings}>
            <div className="items-slider">
                <div>
                    <img src={jean}></img>
                </div>
                <div>
                    <h1>Jean Rojas</h1>
                    <p> Cursando Engenharia de Software <br/> Aluno da Uniamérica</p>
                    <p> Lider do grupo <br />
                        Um dos responsaveis pela estilização e <br /> programação das páginas web.
                    </p>
                </div>
            </div>
            <div className="items-slider">
                <h1>Gustavo Antonio</h1>
            </div>
            <div className="items-slider">
                <h1>Eduardo Azevedo</h1>
            </div>
            <div className="items-slider">
                <h1>João Vitor</h1>
            </div>
            <div className="items-slider">
                <h1>João Eloir</h1>
            </div>
        </Slider>
    )
    }
}


export default Aboutslider;