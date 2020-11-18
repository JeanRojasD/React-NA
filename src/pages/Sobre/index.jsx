import React,{useState} from 'react';
import Header from '../../components/Header';
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
    content : `Ensinar cursos essênciais para iniciantes ou inexperientes em informática basica, o aprendiz estará junto com    
    a gente absorvendo tudo que é ensinado gratuitamente em nossa plataforma de estudos que foi criada para ser
   100% online e gratuita facilitando assim o acesso à todos`
  },
  {
    id : "texto2",
    titulo : "Sobre Nós",
    content : `Somos Estudantes Da Faculdade Uniamérica do Paraná. Estamos cursando a faculdade de Engenharia De Software,
    criamos essa plataforma através do nosso projeto integrador e estamos trabalhando para leva-lo além,                
    acreditamos que muitas pessoas ainda possuem carência em conhecimento quando o assunto é informatica, oque pode     
    impactar muito em sua vida profissional e social.`
  }
];

const [currenttext,setCurrenttext] = useState(textoss[1]);

const toggleText=() => {
  const index=currenttext.id==="texto2"?0:1;
  setCurrenttext(textoss[index])
}

return(
  <div className="sobre-page">
    <Header />
    <div className="container">
    <button onClick={toggleText} id="arrowla">
          <img src={arrowla} alt="arrowla"/>
        </button>
      <div>
        <h1 className="h1">{currenttext.titulo}</h1>
        <p className="p">{currenttext.content}</p>
      </div>
      <button onClick={toggleText} id="arrowca">
          <img src={arrowca} alt="arrowca"/>
        </button>
    </div>
    <Rodapeimg />      
    <Rodape />
  </div>   
  )
}
export default Sobre;

