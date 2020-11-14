import React, {useState} from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Displayer from '../../components/Displayer';
import Summary from '../../components/Summary';
import Spec_sqrs from '../../components/Spec_sqrs';
import wordlogo from '../../assets/images/word.png';
import apostila from '../../assets/images/apostila.png';
import slides from '../../assets/images/slides.png';
import video from '../../assets/images/video.png';

import './index.css'

function Specific(){
    const [open, setOpen] = useState(false);
    return(
        <div>
            <Menu />
            <Summary src={wordlogo} text="O Microsoft Word é um processador
                    de texto produzido pela Microsoft Office
                    foi criado por Richard Brodie para computadores
                    IBM PC com o sistema operacional DOS em 1983.
                    Mais tarde foram criadas versões para o
                    Apple Macintosh, SCO UNIX e Microsoft Windows.
                    Faz parte do conjunto de aplicativos Microsoft Office."/>
            <button className="display_btn" onClick={() => setOpen(!open)}><Spec_sqrs src={slides} src2={video} src3={apostila} ></Spec_sqrs></button>
            {open && (
                <Displayer></Displayer>
            )}
            <Rodape />
        </div>
    );
}
export default Specific;