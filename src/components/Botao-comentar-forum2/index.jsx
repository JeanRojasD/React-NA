import React, { useState } from 'react';
import Modal3 from '../Modal3'
import Botaocomentar from '../../assets/images/botaocomentar.png'
import Anexar from '../../assets/images/image14.png'
import './index.css'

function Botaopop3() {
    const [isModalVisible, setIsmodalVisible] = useState(false)
    return (
        <div>
            <button className="adicionarrr" onClick={() => setIsmodalVisible(true)}>
                <img className="lactoseee" src={Botaocomentar} alt="foto" />
            </button>
            {isModalVisible ? (
                <Modal3 onClose={() => setIsmodalVisible(false)}>
                    <div className="popallll">
                        <div className="adds">
                            <textarea name="digite" id="adoo" cols="250" rows="8"></textarea>
                        </div>
                     <button className="cmtt"><img src={Botaocomentar} alt="comentar"/></button>  
                     <button className="anxx"><img src={Anexar} alt="anexo"/></button> 
                    </div>
                </Modal3>
            ) : null}
        </div>
    );
}

export default Botaopop3;