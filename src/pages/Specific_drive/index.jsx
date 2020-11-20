import React, { useState } from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Displayer from '../../components/Displayer';
import Summary from '../../components/Summary';
import Sqr_specifics from '../../components/Sqr_specifics';
import gdlogo from '../../assets/images/googledrive.png';

import './index.css'

function Specific_drive() {
    const divStyle = {
        backgroundColor: '#ffd04c',
    };
    const [open, setOpen] = useState(false);
    return (
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={gdlogo} text="Google Drive é um serviço de armazenamento e sincronização 
            de arquivos em nuvem, permitindo armazenar arquivos através deste serviço e acedê-los
            a partir de qualquer computador ou outros dispositivos compatíveis, foi lançado pelo Google em 2012."/>
            <button className="display_btn" onClick={() => setOpen(!open)}><Sqr_specifics style={divStyle}></Sqr_specifics></button>
            {open && (
                <Displayer
                    line_1="Conteudo 1 -"
                    line_2="Conteudo 2 -"
                    line_3="Conteudo 3 -"
                    line_4="Conteudo 4 -"
                    line_5="Conteudo 5 -">
                </Displayer>

            )}
            <Rodape />
        </div>
    );
}
export default Specific_drive;