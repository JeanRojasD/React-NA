import React from 'react'
import './index.css'
import Jao from '../../assets/images/João.png'
import Eduardo from '../../assets/images/Eduardo.png'
import Jean from '../../assets/images/Jean.png'
import Gustavo from '../../assets/images/Gustavo.png'
import Eloir from '../../assets/images/Eloir.png'

function Rodapeimg (){
return(
<div className="fotos">
 <div>
     <img src={Jean} alt="Jean"/>
     <ol>    Jean Rojas</ol> 
 </div>
 <div>
     <img src={Gustavo} alt="Gustavo"/>
     <ol>Gustavo Antônio</ol> 
 </div>
 <div>
     <img src={Eduardo} alt="Eduardo"/>
     <ol>Eduardo Azevedo</ol> 
 </div>
 <div>
     <img src={Jao} alt="João Vitor"/>
     <ol>      João Vitor</ol> 
 </div>
 <div>
     <img src={Eloir} alt="João Eloir"/>
     <ol>    João Eloir</ol> 
 </div>
</div>
)
}
 export default Rodapeimg;