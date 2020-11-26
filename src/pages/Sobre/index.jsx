import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import './index.css';
import sobre from '../../assets/images/objetivo.jpg';
import sobretwo from '../../assets/images/sobre2.jpg';
import Aboutslider from '../../components/Slider-about';


function Sobre(){

return(
  <div className="sobre-page">
    <Header />
    <div className="sobre-container">
        <div className="sobre-objetivo">
          <img src={sobre}></img>
          <div className="sobre-text">
            <h1>Nosso Objetivo:</h1>
            <p> Ensinar cursos essênciais para iniciantes ou<br/>
              inexperientes em informática basica, o aprendiz<br/>
              estará junto com a gente absorvendo tudo que é<br/>
              ensinado gratuitamente em nossa plataforma de<br/> 
              estudos que foi criada para ser 100% online e<br/>
              gratuita facilitando assim o acesso à todos.<br/>
            </p>
          </div>
        </div>
        <div className="sobre-nos">
          <div className="sobre-text">
            <h1>Nosso Objetivo:</h1>
            <p> Ensinar cursos essênciais para iniciantes ou<br/>
                inexperientes em informática basica, o aprendiz<br/>
                estará junto com a gente absorvendo tudo que é<br/>
                ensinado gratuitamente em nossa plataforma de<br/> 
                estudos que foi criada para ser 100% online e<br/>
                gratuita facilitando assim o acesso à todos.<br/>
            </p>
          </div>
          <img src={sobretwo}></img>
        </div>
        <div className="about-center">
          <Aboutslider />
        </div>
    </div>     
    <Rodape />
  </div>   
  );
}
export default Sobre;

