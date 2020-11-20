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
        backgroundColor: '#d14424',
    };
    const [open, setOpen] = useState(false);
    return (
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={pplogo} text="Microsoft PowerPoint é um software utilizado para 
            criação, edição e exibição de apresentações gráficas, é constantemente usado em apresentações. 
            Foi lançado em 1990 e hoje faz parte do conjunto de aplicativos Microsoft Office."/>
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
export default Specific_pp;