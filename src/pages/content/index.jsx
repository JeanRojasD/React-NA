import React from 'react';

function content(){
    return(
        <section>
            <section className="slide">
                <div className="slideshow">
                    <div className="arrowl">
                        <img></img>
                    </div>
                </div>
                <div className="points">
                    <div id="pt1"></div>
                    <div id="pt2"></div>
                    <div id="pt3"></div>
                    <div id="pt4"></div>
                </div>
            </section>
            <div className="content"></div>
        </section>
    );
}
export default content;