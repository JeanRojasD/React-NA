import React from 'react'
import Header from '../../components/Header'
import Rodape from '../../components/Rodape'
import Search from '../../components/Forum-search'
import Tag from '../../components/Forum-tags'
import Searchbuttons from '../../components/Forum-buttons'
import Posts from '../../components/Forum-posts'
import './index.css'

function Forum() {
    return(
        <div className="forum-page">
            <Header />
            <div className="forum-components">
                <Search />
                <Searchbuttons />
                <div className="forum-square">
                    <div className="forum-tags">
                        <Tag />
                    </div>
                    <div className="forum-posts">
                        <Posts />
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    );
}
export default Forum;