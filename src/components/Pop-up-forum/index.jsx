import React, { useState } from 'react';
import Modal from '../Modal'
import './index.css'
function Botaopop() {
    const [isModalVisible, setIsmodalVisible] = useState(false)
    return(
        <div className="botao">
            <button className="adicionar" onClick={()=>setIsmodalVisible(true)}>adicionar</button>
            {isModalVisible ? (
            <Modal onClose={() => setIsmodalVisible(false)}>
             </Modal> 
             ) : null}
        </div>
       );
    }
   
export default Botaopop;