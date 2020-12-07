import React from 'react';
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Searchcontent from '../../components/search-content';
import Sqrcontent from '../../components/Sqr-content';
import Slideshow from '../../components/Slider-Content';
import './index.css'

function Content() {
    return (
        <div className="content-page">
            <Header />
            <Searchcontent />
            <div className="content-body">
                <Slideshow />
            </div>
            <Sqrcontent />
            <Rodape />
        </div>
    );
}
export default Content;