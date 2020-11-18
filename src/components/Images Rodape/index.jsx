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
    <div className="img-align">
        <img src={Jean} alt="Jean"/>
        <p>Jean Rojas</p> 
    </div>
    <div className="img-align">
        <img src={Gustavo} alt="Gustavo"/>
        <p>Gustavo Antônio</p> 
    </div>
    <div className="img-align">
        <img src={Eduardo} alt="Eduardo"/>
        <p>Eduardo Azevedo</p> 
    </div>
    <div className="img-align">
        <img src={Jao} alt="João Vitor"/>
        <p>João Vitor</p> 
    </div>
    <div className="img-align">
        <img src={Eloir} alt="João Eloir"/>
        <p>João Eloir</p> 
    </div>
</div>
)
}
 export default Rodapeimg;