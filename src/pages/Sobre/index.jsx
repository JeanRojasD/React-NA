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
      <div className='slider'>
        <Slider />
      </div>
              <section className="fotos">
                <img id="jean" src={Jean} alt="Jean Rojas"/>
                <img id="gustavo" src={Gustavo} alt="Gustavo Antônio"/>
                <img id="eduardo" src={Eduardo} alt="Eduardo Azevedo"/>
                <img id="jao" src={Jao} alt="João Vitor"/>
                <img id="eloir" src={Eloir} alt="João Eloir"/>
                <h1>              Jean Rojas           Gustavo Antônio       Eduardo Azevedo          João Vitor                João Eloir</h1>
              </section>
              <div className='space'>                                                                      </div>
         <Rodape />   
    </div>      
  );
}

export default Sobre;