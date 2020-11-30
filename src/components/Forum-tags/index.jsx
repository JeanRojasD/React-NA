import React from 'react'
import './index.css'
import Tag from '../Tag'
import doc from '../../assets/images/Doc.png'
import excel from '../../assets/images/Exceltag.png'
import google from '../../assets/images/Google.png'
import powerpoint from '../../assets/images/Powerpointag.png'
import livre from '../../assets/images/Free.png'

function Search() {
    return(
        <div className="forumtags-content">
            <Tag imagem={doc} text="Word"/>
            <Tag imagem={excel} text="Excel"/>
            <Tag imagem={google} text="Google"/>
            <Tag imagem={powerpoint} text="Powerpoint"/>
            <Tag imagem={livre} text="Livre"/>
        </div>
    );
}
export default Search;