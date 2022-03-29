import React from 'react'
import "./testimonial.css"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
      <div className='testimonial' id="testimonials">
    <Fade top >
        <div className="testimonial-head service-head">
            <p>TESTIMONIAL</p>
            <h1>Our Happy Clients</h1>
        </div>
        </Fade>
            <div className="testimonial-section">
           
                <div className="testimonial-review">
                <Fade left>
                    <img className="testimonial-review-img" src="./images/cust-1.jpg" alt="" />
                </Fade>
                </div>
                <div className="testimonial-review">
                <Fade bottom>
                    <img className="testimonial-review-img" src="./images/cust-3.jpg" alt="" />
                </Fade>
                </div>
                <div className="testimonial-review">
                <Fade right>
                    <img className="testimonial-review-img" src="./images/cust-2.jpg" alt="" />
                </Fade>
                </div>
            </div>
    </div>
        
  )
}

export default Testimonial