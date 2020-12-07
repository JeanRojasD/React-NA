import React from "react";
import './index.css'
import Forumnew from '../../components/Forum-new-comment';
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import Search from '../../components/Forum-search'
import Tag from '../../components/Forum-tags'
import Searchbuttons from '../../components/Forum-buttons'
import Eduardo from '../../assets/images/eduardo.png'

function Forum2() {
    return (
        <div>
            <Header />
            <Search />
            <Searchbuttons />
            <div className="f-posi">
                <div className="f-tag">
                <Tag />
                </div>
                <div className="f-fn">
                <Forumnew imagem={Eduardo}/>
                </div>
            </div>
            <Rodape />
        </div>

    )
}
export default Forum2;