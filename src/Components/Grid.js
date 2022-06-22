import React from "react";
import one from '../images/travel/1.jpg'
import two from '../images/travel/2.jpg'
import three from '../images/travel/3.jpg'
import fo from '../images/travel/4.jpg'
import five from '../images/travel/5.jpg'
import six from '../images/travel/6.jpg'
import seven from '../images/travel/7.jpg'
import eight from '../images/travel/8.jpg'
import nine from '../images/travel/9.jpg'


function Grid() {
    return (
        <section className="grid-section">
            <div className="grid">
                <div className="one">
                    <img className="img" src={one} alt="" width="100px" />
                </div>

                <div className="two">
                    <img className="img" src={two} alt="" width="100px" />
                    <img className="img" src={three} alt="" width="100px" />
                </div>

                <div className="three">
                    <img className="img" src={fo} alt="" width="100px" />
                    <img className="img" src={five} alt="" width="100px" />
                </div>
                <div className="four">
                    <img className="img" src={six} alt="" width="100px" />
                    <img className="img" src={seven} alt="" width="100px" />
                </div>
                <div className="five">
                    <img className="img" src={eight} alt="" width="100px" />
                    <img className="img" src={nine} alt="" width="100px" />
                </div>

            </div>

            <h1 className="experience">Online Experiences</h1>
            <p className="description">
                Airbnb listing descriptions are best when they are provided with clear information explaining your property, using strong adjectives in separate sentences to drive your point. One of the biggest mistakes when describing your Airbnb listing is not getting your point across to the target audience.
            </p>
        </section>
    )
}

export default Grid;