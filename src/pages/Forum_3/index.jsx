import React from 'react'
import Forum_inside from '../../components/Forum-inside-posts'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import Search from '../../components/Forum-search'
import Tag from '../../components/Forum-tags'
import Searchbuttons from '../../components/Forum-buttons'
import Eduardo from '../../assets/images/eduardo.png'

function Page_forum_3(){
    return(
        <div>
            <Header />
            <Search />
            <Searchbuttons />
            <div className="f-posi">
                <div className="f-tag">
                <Tag />
                </div>
                <div className="f-fn">
               <Forum_inside imagem={Eduardo} titulo="Tenho uma duvida"  nome="Eduardo Azevedo de Lima" tempo="há um ano atrás." />
                </div>
            </div>
            <Rodape />
        </div>
    )
}
export default Page_forum_3;