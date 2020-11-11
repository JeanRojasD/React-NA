import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Rodapeimg from '../../components/Images Rodape';
import './index.css';
import arrowca from '../../assets/images/arrowca.png';
import arrowla from '../../assets/images/arrowla.png';


function Sobre(){
return(
  <div>
    <Menu />
    <div className="textos1">
        <button id="arrowla">
          <img src={arrowla}/>
        </button>
        <button id="arrowca">
          <img src={arrowca} />
        </button>
      <div>
        <h1>Sobre Nós</h1>
        <p>Somos Estudantes Da Faculdade Uniamérica no Paraná, estamos cursando a faculdade de</p>
        <p>Engenharia De Software, Criamos essa plataforma através do nosso projeto Integrador e</p>               
        <p>estamos trabalhando para levar-lo além, acreditamos que muitas pessoas ainda faltam em conhecimento</p>  
        <p>nessa área em específico, oque pode  impactar muito em sua vida social.</p>
      </div>
    </div>
    <Rodapeimg />      
    <Rodape />
  </div>   
  )
}
export default Sobre;

