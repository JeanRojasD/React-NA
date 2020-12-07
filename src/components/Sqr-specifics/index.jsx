import React,{ useState }from 'react';
import Displayer from '../Displayer';
import Slides from '../../assets/images/slides.svg';
import Videos from '../../assets/images/videos.svg';
import Books from '../../assets/images/books.svg';
import './index.css'

function Sqrspecifics(props){
    const [show,setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const listContent = [
        {
            id: 1,
            content: "Iniciante I",
        },
        {
            id: 2,
            content: "Iniciante II",
        },
        {
            id: 3,
            content: "Intermediário I",
        },
        {
            id: 4,
            content: "Intermediário II",
        },
        {
            id: 5,
            content: "Experiente I",
        },
    ];
    const listId = listContent.map((postItems) =>
        <p>{postItems.content}</p>
    );
    return(
        <div>
            <div className="sqrs_specs">
                <div style={props.style} onClick={handleShow}>
                    <img src={Slides} alt="/"></img>
                    <h1>Slides</h1>
                </div>
                <div style={props.style} onClick={handleShow}>
                    <img src={Videos} alt="/"></img>
                    <h1>Vídeos</h1>
                </div>
                <div style={props.style} onClick={handleShow}>
                    <img src={Books} alt="/"></img>
                    <h1>Apostilas</h1>
                </div>
            </div>
            {show && (
                <Displayer
                    line_1={listId[0]}
                    line_2={listId[1]}
                    line_3={listId[2]}
                    line_4={listId[3]}
                    line_5={listId[4]}>
                </Displayer>

            )}
            {show && (
                <Displayer
                    line_1={listId[0]}
                    line_2={listId[1]}>
                </Displayer>

            )}
            {show && (
                <Displayer
                    line_1={listId[4]}
                    line_2={listId[3]}
                    line_3={listId[2]}
                    line_4={listId[1]}
                    line_5={listId[0]}>
                </Displayer>
            )}
        </div>
    );
}
export default Sqrspecifics;