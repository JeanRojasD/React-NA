import React from 'react'
import Posts from '../Posts'
import jean from '../../assets/images/jean.png'
import contentposts from '../../data/posts.json'

function Forumposts(){
    return(
        <div className="posts-margin">
            {contentposts.map((contentposts, index) =>
                    <li key={index}><Posts img={jean} title={contentposts.title} name={contentposts.name} year={contentposts.year} number={contentposts.number}/></li>
                )}
        </div>
    );
}
export default Forumposts;