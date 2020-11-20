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
        backgroundColor:'#2A5893', 
    };
    const [open, setOpen] = useState(false);
    return(
        <div className="specific-page">
            <Header />
            <Summary style={divStyle} src={wordlogo} text="O Microsoft Word é software um editor de textos, cartas e documentos
                    desenvolvido pela Microsoft Office, foi criado por Richard Brodie para computadores
                    em 1983. Faz parte do conjunto de aplicativos Microsoft Office."/>
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
export default Specific_word;