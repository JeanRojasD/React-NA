import React from 'react';
import './index.css'

import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Flecha from '../../components/flecha'
import arrowl from '../../assets/images/arrowl.png';
import arrowr from '../../assets/images/arrowr.png';
import wordlogo from '../../assets/images/word.png';
import exlogo from '../../assets/images/excel.png';
import pplogo from '../../assets/images/powerpoint.png';

import Slideshow from '../../components/slider';

function content() {
    return (
        <div>
            <Menu />
            <div className="contentbody">
                <Slideshow/>
            </div>
            <Rodape />
        </div>
    );
}
export default content;