import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Summary from '../../components/Summary';
import Sqrspecifics from '../../components/Sqr-specifics';
import pplogo from '../../assets/images/powerpoint.png';

import './index.css'

function Specificpp() {
    const divStyle = {
        background: '#d14424',
    };
    return (
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={pplogo} text="Microsoft PowerPoint é um software utilizado para 
            criação, edição e exibição de apresentações gráficas, é constantemente usado em apresentações. 
            Foi lançado em 1990 e hoje faz parte do conjunto de aplicativos Microsoft Office."/>
            <Sqrspecifics style={divStyle}></Sqrspecifics>
            <Rodape />
        </div>
    );
}
export default Specificpp;