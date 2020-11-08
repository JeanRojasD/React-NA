import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import wordlogo from '../../assets/images/word.png';
import apostila from '../../assets/images/apostila.png';
import podcast from '../../assets/images/podcast.png';
import slides from '../../assets/images/slides.png';
import video from '../../assets/images/video.png';

import './index.css'

function specific(){
    return(
        <section>
            <Menu />
            <section className="page">
                <div className="logo">
                    <img src={wordlogo}></img>
                </div>
                <div className="summary">
                    <p>O Microsoft Word é um processador
                    de texto produzido pela Microsoft Office
                    foi criado por Richard Brodie para computadores
                    IBM PC com o sistema operacional DOS em 1983.
                    Mais tarde foram criadas versões para o
                    Apple Macintosh, SCO UNIX e Microsoft Windows.
                    Faz parte do conjunto de aplicativos Microsoft Office.</p>
                </div>
            </section>
            <section className="squares">
                <a><img src={apostila}></img></a>
                <a><img src={slides}></img></a>
                <a><img src={video}></img></a>
                <a><img src={podcast}></img></a>
            </section>
            <Rodape />
        </section>
    );
}

export default specific;