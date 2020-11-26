import React, { useState } from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Displayer from '../../components/Displayer';
import Summary from '../../components/Summary';
import Sqr_specifics from '../../components/Sqr_specifics';
import exlogo from '../../assets/images/excel.png';

import './index.css'

function Specific_excel() {
    const divStyle = {
        backgroundColor: '#207245',
    };
    const [open, setOpen] = useState(false);
    return (
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={exlogo} text="O Microsoft Excel é software de edição de planilhas, com 
            ferramentas de cálculo e de construção de tabelas personalizadas, foi lançado para o Windows em 1985
            e faz parte do conjunto de aplicativos Microsoft Office."/>
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
export default Specific_excel;