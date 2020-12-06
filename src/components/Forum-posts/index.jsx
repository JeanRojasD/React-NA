import React from 'react'
import Posts from '../Posts'
import './index.css'
import jean from '../../assets/images/jean.png'

function Forumposts(){
    return(
        <div className="posts-margin">
            <Posts img={jean} title="Titulo" name="Jean" year="há um ano atrás" number="30"  />
            <Posts img={jean} title="Titulo" name="Jean" year="há um ano atrás" number="30"  />
            <Posts img={jean} title="Titulo" name="Jean" year="há um ano atrás" number="30"  />
            <Posts img={jean} title="Titulo" name="Jean" year="há um ano atrás" number="30"  />
            <Posts img={jean} title="Titulo" name="Jean" year="há um ano atrás" number="30"  />
            <Posts img={jean} title="Titulo" name="Jean" year="há um ano atrás" number="30"  />
        </div>
    );
}
export default Forumposts;