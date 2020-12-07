import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Summary from '../../components/Summary';
import Sqrspecifics from '../../components/Sqr-specifics';
import wordlogo from '../../assets/images/word.png';

import './index.css'

function Specificword(){
    const divStyle = {
        background: '#2A5893',
    };
    return(
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={wordlogo} text="O Microsoft Word é software um editor de textos, cartas e documentos
                    desenvolvido pela Microsoft Office, foi criado por Richard Brodie para computadores
                    em 1983. Faz parte do conjunto de aplicativos Microsoft Office."/>
            <Sqrspecifics style={divStyle}></Sqrspecifics>
            <Rodape />
        </div>
    );
}
export default Specificword;