import React from 'react';
import Header from '../../components/Header';
import SimpleSlider from '../../components/Slider-forum'
import Rodape from '../../components/Rodape'
import Pg2 from '../../components/Comment2'
import Image12 from '../../assets/images/image12.png'
import Image13 from '../../assets/images/image13.png'
import Botaopop2 from '../../components/Popup2-forum';

function Forumpag2(){
    return(
        <section>
            <Header/>
            <SimpleSlider/>
            <Botaopop2/>
            <Pg2 nome="Eduardo" titulo="COMENTARIO" data="10/20/10"  like={Image12} deslike={Image13} />
            <Rodape/>
        </section>
    )
    }

export default Forumpag2;