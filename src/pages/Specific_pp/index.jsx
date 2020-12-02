import React, { useState } from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Displayer from '../../components/Displayer';
import Summary from '../../components/Summary';
import Sqr_specifics from '../../components/Sqr_specifics';
import pplogo from '../../assets/images/powerpoint.png';

import './index.css'

function Specific_pp() {
    const divStyle = {
        background: '#d14424',
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
            <Summary style={divStyle} src={pplogo} text="Microsoft PowerPoint é um software utilizado para 
            criação, edição e exibição de apresentações gráficas, é constantemente usado em apresentações. 
            Foi lançado em 1990 e hoje faz parte do conjunto de aplicativos Microsoft Office."/>
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
export default Specific_pp;