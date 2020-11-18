import React from 'react';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Sqr_content from '../../components/Sqr_content';
import Slideshow from '../../components/Slider-Content';
import './index.css'

function Content() {
    return (
        <div>
            <Menu />
            <div className="contentbody">
                <Slideshow />
            </div>
            <Sqr_content />
            <Rodape />
        </div>
    );
}
export default Content;