import React, {useState} from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Displayer from '../../components/Displayer';
import Summary from '../../components/Summary';
import Sqr_specifics from '../../components/Sqr_specifics';
import wordlogo from '../../assets/images/word.png';

import './index.css'

function Specific_word(){
    const divStyle = {
        background: '#2A5893',
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
    return(
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={wordlogo} text="O Microsoft Word é software um editor de textos, cartas e documentos
                    desenvolvido pela Microsoft Office, foi criado por Richard Brodie para computadores
                    em 1983. Faz parte do conjunto de aplicativos Microsoft Office."/>
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
export default Specific_word;