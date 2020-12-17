import React, {useState} from 'react'
import Foruminside from '../../components/Forum-inside-posts'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import Search from '../../components/Forum-search'
import Tag from '../../components/Forum-tags'
import Searchbuttons from '../../components/Forum-buttons'
import Eduardo from '../../assets/images/eduardo.png'
import Insideposts from '../../components/Forum-comment-inside'
import Comments from '../../data/comments.json'

function Pageforum3() {
    
    const [comments, setComments]=useState(Comments);
    const addComent=(comment)=>{
        setComments([...comments, {
            ...comment,
            "id": comments.length +1,
        }])
    }

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
                        {comments.map((comment)=>{return <Foruminside comment={comment} key={comment.id} /> })}
                    </div>
                    <div className="f-fc">
                        <Insideposts imagem={Eduardo} sendComment={addComent} />
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    )
}
export default Pageforum3;