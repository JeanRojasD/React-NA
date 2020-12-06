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
        background: '#ffd04c',
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
            <Summary style={divStyle} src={gdlogo} text="Google Drive é um serviço de armazenamento e sincronização 
            de arquivos em nuvem, permitindo armazenar arquivos através deste serviço e acedê-los
            a partir de qualquer computador ou outros dispositivos compatíveis, foi lançado pelo Google em 2012."/>
            <Sqr_specifics style={divStyle}></Sqr_specifics>
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
export default Specific_drive;