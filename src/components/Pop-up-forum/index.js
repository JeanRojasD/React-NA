import React, {useState} from 'react';


function Botaopop(){
    const [isModalVisible, setIsmodalVisible] = useState(false)
    return(
        <div className="botao">
            <button onClick={setIsmodalVisible(true)}> open </button>
            {isModalVisible ? <h1>aaaaaaaaaa</h1> : null}
        </div>
    );
}

export default Botaopop;