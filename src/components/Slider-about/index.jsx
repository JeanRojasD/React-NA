import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jean from '../../assets/images/jean.png';
import eduardo from '../../assets/images/eduardo.png';
import gustavo from '../../assets/images/gustavo.png';
import joaovitor from '../../assets/images/joaovitor.png';
import joaoeloir from '../../assets/images/joaoeloir.png';
import './index.css';

class Aboutslider extends Component{
    render(){
        const aboutsettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 10000,
            infinite:true,
            dots:true,
            arrows: true,
            className:"about-slider",
        };

    return(
        <Slider {...aboutsettings}>
            <div className="items-slider">
                <div>
                    <img src={jean} alt="jean"></img>
                </div>
                <div className="items-text">
                    <h1>Jean Rojas</h1>
                    <p> Cursando Engenharia de Software <br/> 
                        Aluno da Uniamérica
                    </p>
                    <p> Lider do grupo <br />
                        Um dos responsaveis pela estilização e <br /> 
                        programação das páginas web.
                    </p>
                </div>
            </div>
            <div className="items-slider">
            <div>
                    <img src={gustavo} alt="gustavo"></img>
                </div>
                <div className="items-text">
                    <h1>Gustavo Antonio</h1>
                    <p> Cursando Engenharia de Software <br/> 
                        Aluno da Uniamérica
                    </p>
                    <p> Designer integral do grupo <br />
                        Um dos responsaveis pela estilização e <br /> 
                        programação das páginas web.
                    </p>
                </div>
            </div>
            <div className="items-slider">
                <div>
                    <img src={eduardo} alt="eduardo"></img>
                </div>
                <div className="items-text">
                    <h1>Eduardo Azevedo</h1>
                    <p> Cursando Engenharia de Software <br/> 
                        Aluno da Uniamérica
                    </p>
                    <p> Analista do forúm <br />
                        Um dos responsaveis pela estilização e <br /> 
                        programação das páginas web.
                    </p>
                </div>
            </div>
            <div className="items-slider">
            <div>
                    <img src={joaovitor} alt="joaovitor"></img>
                </div>
                <div className="items-text">
                    <h1>João Vitor</h1>
                    <p> Cursando Engenharia de Software <br/> 
                        Aluno da Uniamérica
                    </p>
                    <p> Integrante do grupo <br />
                        Um dos responsaveis pela estilização e <br /> 
                        programação das páginas web.
                    </p>
                </div>
            </div>
            {/* <div className="items-slider">
            <div>
                    <img src={joaoeloir} alt="joaoeloir"></img>
                </div>
                <div className="items-text">
                    <h1>João Eloir</h1>
                    <p> Cursando Engenharia de Software <br/> 
                        Aluno da Uniamérica
                    </p>
                    <p> Demandante do grupo <br />
                        Um dos responsaveis pela estilização e <br /> 
                        programação das páginas web.
                    </p>
                </div>
            </div> */}
        </Slider>
    )
    }
}


export default Aboutslider;