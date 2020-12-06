import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Summary from '../../components/Summary';
import Sqr_specifics from '../../components/Sqr_specifics';
import wordlogo from '../../assets/images/word.png';

import './index.css'

function Specific_word(){
    const divStyle = {
        background: '#2A5893',
    };
    return(
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={wordlogo} text="O Microsoft Word é software um editor de textos, cartas e documentos
                    desenvolvido pela Microsoft Office, foi criado por Richard Brodie para computadores
                    em 1983. Faz parte do conjunto de aplicativos Microsoft Office."/>
            <Sqr_specifics style={divStyle}></Sqr_specifics>
            <Rodape />
        </div>
    );
}
export default Specific_word;