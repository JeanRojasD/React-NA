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
     <img src={Jean}/>
     <ol>    Jean Rojas</ol> 
 </div>
 <div>
     <img src={Gustavo}/>
     <ol>Gustavo Antônio</ol> 
 </div>
 <div>
     <img src={Eduardo}/>
     <ol>Eduardo Azevedo</ol> 
 </div>
 <div>
     <img src={Jao}/>
     <ol>      João Vitor</ol> 
 </div>
 <div>
     <img src={Eloir}/>
     <ol>    João Eloir</ol> 
 </div>
</div>
)
}
 export default Rodapeimg;