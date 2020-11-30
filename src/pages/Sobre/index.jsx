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
              gratuita facilitando assim o acesso à todos.
            </p>
          </div>
        </div>
        <div className="sobre-nos">
          <div className="sobre-text">
            <h1>Nosso Objetivo:</h1>
            <p> Somos Estudantes Da Faculdade Uniamérica<br/>
               do Paraná. Estamos cursando a faculdade de<br/>
               Engenharia De Software, criamos essa<br/>
               plataforma através do nosso projeto integrador<br/>
               e estamos trabalhando para leva-lo além,<br/>
               acreditamos que muitas pessoas ainda possuem<br/>
               carência em conhecimento quando o assunto é<br/>
               informatica, oque pode impactar muito em<br/>
               sua vida profissional e social.
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

