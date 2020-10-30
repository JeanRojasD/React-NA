import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import obj from '../../assets/images/obj.png';
import qms from '../../assets/images/qms.png'

export default class Slide extends React.Component {
    render() {
        const images = [
            {
                original: obj,
                thumbnail: obj,
            },
            {
                original: qms,
                thumbnail: qms,
            },
        ]
        return (
            <ImageGallery items={images} autoPlay={true} showThumbnails={false}/>
        );
    }
}