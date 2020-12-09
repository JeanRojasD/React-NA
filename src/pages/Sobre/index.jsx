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
          <img src={sobre} alt="imagem"></img>
          <div className="sobre-text">
            <h1>Nosso Objetivo:</h1>
            <p> Ensinar cursos essênciais para iniciantes ou
              inexperientes em informática básica, onde o aprendiz
              por meio da plataforma online terá acesso a
              conteúdos didáticos e dinâmicos.
              para então disponibilizar uma experiência
              no âmbito online à comunidade.
            </p>
          </div>
        </div>
        <div className="sobre-nos">
          <div className="sobre-text">
            <h1>Quem somos?</h1>
            <p> Somos universitários da universidade Uniamérica do Paraná
                cursando engenharia de software, criamos essa plataforma
                através do projeto integrador e estamos trabalhando
                para impusiona-la, tendo a convicção de que muitos indivíduos
                ainda possuem carência quando o assunto é informática e
                conhecimento digital, o que pode impactar
               muito em sua vida profissional e social.
            </p>
          </div>
          <img src={sobretwo} alt="imagem"></img>
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

