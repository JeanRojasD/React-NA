import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Summary from '../../components/Summary';
import Sqrspecifics from '../../components/Sqr-specifics';
import exlogo from '../../assets/images/excel.png';

import './index.css'

function Specificexcel() {
    const divStyle = {
        background: '#207245',
    };
    return (
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={exlogo} text="O Microsoft Excel é software de edição de planilhas, com 
            ferramentas de cálculo e de construção de tabelas personalizadas, foi lançado para o Windows em 1985
            e faz parte do conjunto de aplicativos Microsoft Office."/>
            <Sqrspecifics style={divStyle}></Sqrspecifics>
            <Rodape />
        </div>
    );
}
export default Specificexcel;