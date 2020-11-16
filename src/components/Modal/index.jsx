import React from 'react';
import './index.css'

const Modal = ({id="modal",onClose= () => {}, children}) => {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose()
    }
    return( 
        <div id='modal' className="modal" onClick={handleOutsideClick}>
            <div className="dentro">
                <button className="close" onClick={onClose}>X</button>
            <div className="conteudo">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
