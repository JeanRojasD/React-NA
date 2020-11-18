import React, {useState} from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Displayer from '../../components/Displayer';
import Summary from '../../components/Summary';
import Modal from '../../components/Modal';
import Sqr_specifics from '../../components/Sqr_specifics';
import wordlogo from '../../assets/images/word.png';

import './index.css'

function Specific(){
    const divStyle = {
        backgroundColor:'#2A5893', 
    };
    const [open, setOpen] = useState(false);
    return(
        <div>
            <Menu />
            <Summary style={divStyle} src={wordlogo} text="O Microsoft Word é um processador
                    de texto produzido pela Microsoft Office
                    foi criado por Richard Brodie para computadores
                    IBM PC com o sistema operacional DOS em 1983.
                    Mais tarde foram criadas versões para o
                    Apple Macintosh, SCO UNIX e Microsoft Windows.
                    Faz parte do conjunto de aplicativos Microsoft Office."/>
            <button className="display_btn" onClick={() => setOpen(!open)}><Sqr_specifics style={divStyle}></Sqr_specifics></button>
            {open && (
                <Displayer
                    line_1="Conteudo 1 -"
                    line_2="Conteudo 2 -"
                    line_3="Conteudo 3 -"
                    line_4="Conteudo 4 -"
                    line_5="Conteudo 5 -">
                    <Modal></Modal>
                </Displayer>

            )}
            <Rodape />
        </div>
    );
}
export default Specific;