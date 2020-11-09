import React from 'react';
import Menu from '../../components/Menu'
import Slider from '../../components/Slider'
import Rodape from '../../components/Rodape'
import './index.css'
import Jao from '../../assets/images/João.png'
import Eduardo from '../../assets/images/Eduardo.png'
import Jean from '../../assets/images/Jean.png'
import Gustavo from '../../assets/images/Gustavo.png'
import Eloir from '../../assets/images/Eloir.png'

function Sobre(){
return(
  <div>
        <Menu />
      <div className="textos1">
      <h1>Sobre Nós</h1>
      <p>Somos Estudantes Da Faculdade Uniamérica no Paraná, estamos cursando a faculdade de Engenharia De Software, </p>
      <p>Criamos essa plataforma através do nosso projeto Integrador e estamos trabalhando para levar-lo além, </p>                
      <p>acreditamos que muitas pessoas ainda faltam em conhecimento nessa área em específico, oque pode  </p>   
      <p>impactar muito em sua vida social.</p>
      </div>
      <div className="textos2">
      <h1>Quem Somos ?</h1>
      <p>Ensinar Cursos Essênciais para Iniciantes ou Inexperientes em informática basica, o aprendiz estará junto com  </p>    
      <p>agente absorvendo tudo que é ensinado gratuitamente em nossa plataforma de estudos que foi criada para ser </p>
      <p>100% online e gratuita facilitando assim o acesso á todos. </p>
      </div>
              <section className="fotos">
                <img id="jean" src={Jean} alt="Jean Rojas"/>
                <img id="gustavo" src={Gustavo} alt="Gustavo Antônio"/>
                <img id="eduardo" src={Eduardo} alt="Eduardo Azevedo"/>
                <img id="jao" src={Jao} alt="João Vitor"/>
                <img id="eloir" src={Eloir} alt="João Eloir"/>
                <h1>              Jean Rojas           Gustavo Antônio       Eduardo Azevedo          João Vitor                João Eloir</h1>
              </section>
              <div className='space'>                                                                  </div>
         <Rodape />   
    </div>      
  );
}

export default Sobre;