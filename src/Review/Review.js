import React from 'react'
import "./review.css";
import Fade from "react-reveal/Fade"

const Review = () => {
  return (
    <div className='review' id="support">
    {/* <div className="review-head service-head">
        <p>TESTIMONIAL</p>
        <h1>Our Happy Clients</h1>
    </div> */}
    
        <Fade left>
            <div className="review-left">
                <p>24 hours customer support</p>
                <h1>Customer support is our main priority with their hundred percent satisfaction.</h1>
                <p className="text-gray">Get your content delivered with social media that led potential customer in helping business to grow & expand rapidly</p>
                {/* <p className='text-gray'>From designing content to social media management I have a one stop solution for you.</p> */}
            </div>
        </Fade>
            <Fade right> 
                <div className='review-right'>
                  
                        
                        <img className='support' src="./images/support.svg" alt="" />
                    
                </div>
            </Fade>
    </div>
    
  )
}

export default Review