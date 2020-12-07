import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Summary from '../../components/Summary';
import Sqrspecifics from '../../components/Sqr-specifics';
import gdlogo from '../../assets/images/googledrive.png';

import './index.css'

function Specificdrive() {
    const divStyle = {
        background: '#ffd04c',
    };       
    return (
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={gdlogo} text="Google Drive é um serviço de armazenamento e sincronização 
            de arquivos em nuvem, permitindo armazenar arquivos através deste serviço e acedê-los
            a partir de qualquer computador ou outros dispositivos compatíveis, foi lançado pelo Google em 2012."/>
            <Sqrspecifics style={divStyle}></Sqrspecifics>
            <Rodape />
        </div>
    );
}
export default Specificdrive;