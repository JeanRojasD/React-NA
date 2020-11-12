import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flash from '../../components/Flecha-forum';
import arrow1 from '../../assets/images/arrowl.png';
import arrow2 from '../../assets/images/arrowr.png';
import imgem1 from '../../assets/images/Group_1.png';
import "./index.css";


export default function SimpleSlider() {
  var settings = {
    className:"sumemomemo",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow:<Flash src={arrow2}/>,
    prevArrow:<Flash src={arrow1}/>,
  };
  return (
    <Slider {...settings}>
        <div className="comp1">
            <button className="img1">
              <img className="a" src={imgem1}/>
            </button>
        </div>
        <div className="comp2">
        <button className="img2">
              <img className="b" src={imgem1}/>
            </button>
        </div>
        <div className="comp3">
        <button className="img3">
              <img className="c" src={imgem1}/>
            </button>
        </div>
        <div className="comp4">
        <button className="img4">
              <img className="d" src={imgem1}/>
            </button>
        </div>
    </Slider>
  );
}

