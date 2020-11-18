import React, { useState } from 'react';
import Modal2 from '../Modal2'
import Adicionarl from '../../assets/images/adicionar.png'
import Botaocomentar from '../../assets/images/botaocomentar.png'
import Anexar from '../../assets/images/image14.png'
import './index.css'

function Botaopop2() {
    const [isModalVisible, setIsmodalVisible] = useState(false)
    return (
        <div>
            <button className="adicionarr" onClick={() => setIsmodalVisible(true)}>
                <img className="lactosee" src={Adicionarl} alt="foto" />
            </button>
            {isModalVisible ? (
                <Modal2 onClose={() => setIsmodalVisible(false)}>
                    <div className="popalll">
                        <div className="add">
                            <textarea name="digite" id="adoo" cols="250" rows="8"></textarea>
                        </div>
                     <button className="cmt"><img src={Botaocomentar} alt="comentar"/></button>  
                     <button className="anx"><img src={Anexar} alt="anexo"/></button> 
                    </div>
                </Modal2>
            ) : null}
        </div>
    );
}

export default Botaopop2;