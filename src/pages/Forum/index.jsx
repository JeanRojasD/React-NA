import React from 'react'
import Menu from '../../components/Menu'
import Comment from '../../components/Comment'
import Rodape from '../../components/Rodape'
import SimpleSlider from '../../components/Slider-forum'
import './index.css'
function Forum() {
    return (
        <section>
            <Menu />
            <SimpleSlider/>
            <div className="restricoes">
                <div className="r1">
                <Comment nome="João Eloir" titulo="Office" data="10/10/10 10:10" />
                </div>
                <div className="r1">
                <Comment nome="Jean Rojas" titulo="Excel" data="22/09/20 14:36" />
                </div>
                <div className="r1">
                <Comment nome="Gustavo" titulo="Google Drive" data="14/06/2020 03:30" />
                </div>
            </div>
            <Rodape />
        </section>
    )
}

export default Forum;