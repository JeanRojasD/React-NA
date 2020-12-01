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
        background: '#207245',
    };
    const [open, setOpen] = useState(false);
    const listContent = [
        {
            id: 1,
            content: "Iniciante I",
        },
        {
            id: 2,
            content: "Iniciante II",
        },
        {
            id: 3,
            content: "Intermediário I",
        },
        {
            id: 4,
            content: "Intermediário II",
        },
        {
            id: 5,
            content: "Experiente I",
        },
    ];
    const listId = listContent.map((postItems) =>
        <p>{postItems.content}</p>
    );
    return (
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={exlogo} text="O Microsoft Excel é software de edição de planilhas, com 
            ferramentas de cálculo e de construção de tabelas personalizadas, foi lançado para o Windows em 1985
            e faz parte do conjunto de aplicativos Microsoft Office."/>
            <Sqr_specifics style={divStyle} act={() => setOpen(!open)}></Sqr_specifics>
            {open && (
                <Displayer
                    line_1={listId[0]}
                    line_2={listId[1]}
                    line_3={listId[2]}
                    line_4={listId[3]}
                    line_5={listId[4]}>
                </Displayer>

            )}
            <Rodape />
        </div>
    );
}
export default Specific_excel;