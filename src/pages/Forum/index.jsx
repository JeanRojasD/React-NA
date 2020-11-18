import React from 'react'
import Header from '../../components/Header'
import Comment from '../../components/Comment'
import Rodape from '../../components/Rodape'
import SimpleSlider from '../../components/Slider-forum'
import './index.css'
import Botaopop from '../../components/Pop-up-forum'

function Forum() {
    return (
        <div className="forum-page">
            <Header />
            <div className="forum-content">
                <SimpleSlider/>
                <div className="forum-popup"><Botaopop /></div>
                <div className="forum-box">
                    <div className="forum-square">
                    <Comment nome="João Eloir" titulo="Office" data="10/10/10 10:10" />
                    </div>
                    <div className="forum-square">
                    <Comment nome="Jean Rojas" titulo="Excel" data="22/09/20 14:36" />
                    </div>
                    <div className="forum-square">
                    <Comment nome="Gustavo" titulo="Google Drive" data="14/06/2020 03:30" />
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}

export default Forum;