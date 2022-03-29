import React from 'react';
import "./landingpage.css";
import Fade from 'react-reveal/Fade'; 
import {Link} from "react-scroll";

const LandingPage = () => {
    return (
        
        <div className='hero'>
                <div className='hero-section'>
        <Fade left>
                    <div className="hero-section-left">
                        <div className='hero-section-left-data'>
                            <h1>A Creative Writing helps to grow your Business</h1>
                            <p className ="text-gray">Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.It can include writing blog posts and articles, scripts for videos and podcasts, as well as content for specific platforms, such as tweetstorms on Twitter or text posts on Reddit.</p>
                        </div>
                        <Link to="service" smooth={true} ><button className="sponsor btn-green btn-curve">Let's Explore</button></Link>
                    </div>
        </Fade>
                    <Fade right >
                        <div className="hero-section-right">
                           
                            <img className='img-round' src="./images/Landing_Pages.png" alt="" />
                         
                        </div>
                    </Fade>
                    </div>
            </div>
    )
}

export default LandingPage