import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Sqr_content from '../../components/Sqr_content';
import Slideshow from '../../components/Slider-Content';
import './index.css'

function Content() {
    return (
        <div className="content-page">
            <Header />
            <div className="content-body">
                <Slideshow />
            </div>
            <Sqr_content />
            <Rodape />
        </div>
    );
}
export default Content;