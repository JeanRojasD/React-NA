import React from 'react';
import './index.css'

const Modal3 = ({id="modal",onClose= () => {}, children}) => {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose()
    }
    return( 
        <div id='modal' className="modalll" onClick={handleOutsideClick}>
            <div className="dentrooo">
                <button className="closeee" onClick={onClose}>X</button>
            <div className="conteudooo">{children}</div>
            </div>
        </div>
    );
}

export default Modal3;
