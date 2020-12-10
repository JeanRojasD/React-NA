import React,{ useState }from 'react';
import Displayer from '../Displayer';
import Slides from '../../assets/images/slides.svg';
import Videos from '../../assets/images/videos.svg';
import Books from '../../assets/images/books.svg';
import ContentJson from '../../data/contents.json';
import './index.css'

function SqrSpecifics(props){

    const [show, setShow] = useState();

    const handleShow = (selected) => {
        if(selected === show){
            setShow("");
        }else{
            setShow(selected)
        }
    };

    return(
        <div>
            <div className="sqrs_specs">
                <div style={props.style} onClick={() => handleShow("slides")}>
                    <img src={Slides} alt="/"></img>
                    <h1>Slides</h1>
                </div>
                <div style={props.style} onClick={() => handleShow("videos")}>
                    <img src={Videos} alt="/"></img>
                    <h1>Vídeos</h1>
                </div>
                <div style={props.style} onClick={() => handleShow("apostilas")}>
                    <img src={Books} alt="/"></img>
                    <h1>Apostilas</h1>
                </div>
            </div>
            {show && 
                <Displayer list={ContentJson[show]}></Displayer>
            }
            
        </div>
    );
}
export default SqrSpecifics;