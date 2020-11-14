import React from 'react';
import './index.css'

const Modal2 = ({id="modal",onClose= () => {}, children}) => {
    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose()
    }
    return( 
        <div id='modal' className="modall" onClick={handleOutsideClick}>
            <div className="dentroo">
                <button className="closee" onClick={onClose}>X</button>
            <div className="conteudoo">{children}</div>
            </div>
        </div>
    );
}

export default Modal2;
