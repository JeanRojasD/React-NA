import React,{useState} from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Rodapeimg from '../../components/Images Rodape';
import './index.css';
import arrowca from '../../assets/images/arrowca.png';
import arrowla from '../../assets/images/arrowla.png';


function Sobre(){
   
const textoss=[
  {
    id : "texto1",
    titulo : "Quem Somos",
    content : `Ensinar Cursos Essênciais para Iniciantes ou Inexperientes em informática basica, o aprendiz estará junto com    
    agente absorvendo tudo que é ensinado gratuitamente em nossa plataforma de estudos que foi criada para ser
   100% online e gratuita facilitando assim o acesso á todos`
  },
  {
    id : "texto2",
    titulo : "Sobre Nós2",
    content : `Somos Estudantes Da Faculdade Uniamérica no Paraná, estamos cursando a faculdade de Engenharia De Software,
    Criamos essa plataforma através do nosso projeto Integrador e estamos trabalhando para levar-lo além,                
    acreditamos que muitas pessoas ainda faltam em conhecimento nessa área em específico, oque pode     
    impactar muito em sua vida social.`
  }
];

const [currenttext,setCurrenttext] = useState(textoss[1]);

const toggleText=() => {
  console.log(currenttext.id)
  const index=currenttext.id==="texto2"?0:1;
  setCurrenttext(textoss[index])
}

return(
  <div>
    <Menu />
    <div className="container">
        <button onClick={toggleText} id="arrowla">
          <img src={arrowla}/>
        </button>
        <button onClick={toggleText} id="arrowca">
          <img src={arrowca} />
        </button>
      <div>
        <h1>{currenttext.titulo}</h1>
        <p>{currenttext.content}</p>
      </div>
    </div>
    <Rodapeimg />      
    <Rodape />
  </div>   
  )
}
export default Sobre;

