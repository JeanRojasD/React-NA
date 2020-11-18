import React, { useState } from 'react';
import Modal from '../Modal'
import Adicionarl from '../../assets/images/adicionar.png'
import './index.css'
function Botaopop() {
    const [isModalVisible, setIsmodalVisible] = useState(false)
    return (
        <div>
            <button className="adicionar" onClick={() => setIsmodalVisible(true)}>
                <img className="lactose" src={Adicionarl} alt="foto" />
            </button>
            {isModalVisible ? (
                <Modal onClose={() => setIsmodalVisible(false)}>
                    <div className="popall">
                        <div className="tl">
                            <h3>TÍTULO</h3>
                        </div>
                        <div className="ad">
                            <textarea name="digite" id="ado" cols="30" rows="2"></textarea>
                        </div>
                        <div className="tg">
                            <h3>TAG</h3>
                        </div>
                        <div className="adtg">
                            <textarea name="digite" id="adtag" cols="30" rows="2"></textarea>
                        </div>
                        <button className="crar">criar</button>
                    </div>
                </Modal>
            ) : null}
        </div>
    );
}

export default Botaopop;