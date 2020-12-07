import React from 'react'
import comment from '../../assets/images/comment.png'
import './index.css'
import { Link } from 'react-router-dom';
function Posts(props){
    return(
       <Link to="/Forum_inside_post"> <div className="posts-content">
            <div className="posts-square">
                <div><img  className="posts-image"src={props.img} alt="user"></img></div>
                <div className="posts-information">
                    <h2>{props.title}</h2>
                    <div className="posts-text">
                        <p>{props.name}</p>
                        <p className="posts-year">{props.year}</p>
                    </div>
                </div>
            </div>
            <div className="posts-comments">
                <img src={comment} alt="comentario"></img>
                <p>{props.number}</p>
            </div>
        </div>
        </Link>
    );
}
export default Posts;