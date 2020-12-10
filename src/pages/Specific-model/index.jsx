import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Summary from '../../components/Summary';
import SqrSpecifics from '../../components/Sqr-specifics';

import './index.css'

function SpecificModel({model}){
    const divStyle = {
        background: model.color,
    };
    return(
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={model.logo} text={model.text}/>
            <SqrSpecifics style={divStyle}></SqrSpecifics>
            <Rodape />
        </div>
    );
}
export default SpecificModel;