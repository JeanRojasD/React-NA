import React from 'react'
import Foruminside from '../../components/Forum-inside-posts'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import Search from '../../components/Forum-search'
import Tag from '../../components/Forum-tags'
import Searchbuttons from '../../components/Forum-buttons'
import Eduardo from '../../assets/images/eduardo.png'
import Insideposts from '../../components/Forum-comment-inside'

function Pageforum3() {
    return (
        <div>
            <Header />
            <Search />
            <Searchbuttons />
            <div className="f-posi">
                <div className="f-tag">
                    <Tag />
                </div>
                <div className="f-fa">
                    <div className="f-fb">
                        <Foruminside imagem={Eduardo} titulo="Tenho uma duvida" nome="Eduardo Azevedo de Lima" tempo="há um ano atrás." />
                    </div>
                    <div className="f-fc">
                        <Insideposts imagem={Eduardo} />
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}
export default Pageforum3;