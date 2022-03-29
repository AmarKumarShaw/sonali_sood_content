import React from 'react'
import "./services.css"
import Fade from "react-reveal/Fade"

const Services = () => {
  return (
    <div className='service' id="service">
            <Fade top>
              <div className="service-head service-head-sm">
                  <p>Ideal Soltuion for you</p>
                  <h1>Our Services</h1>
              </div>
            </Fade>
              
            <div className="service-list">
                <Fade left>
                  <div className="service-categories">
                    <img src="./images/download.svg" alt="" />
                    <h4>Content Writing</h4>
                    <p>Content writing is a type of professional marketing writing created for an online audience.</p>
                  </div>
                </Fade>
            
                <Fade bottom>
                  <div className="service-categories">
                    <img src="./images/message.svg" alt="" />
                    <h4>Content Planning & Creation</h4>
                    <p>A content plan determines the content you hope to create and sets expectations for how it should be created.</p>
                  </div>
                </Fade>
           
                <Fade top>
                  <div className="service-categories">
                    <img src="./images/crown.svg" alt="" />
                    <h4>Ghost Writer</h4>
                    <p>Ghost writers are writers for hire who take money but none of the credit for the work produced. </p>
                  </div>
                </Fade>
             
                <Fade right>
                  <div className="service-categories">
                    <img src="./images/partner.svg" alt="" />
                    <h4>Content Strategy </h4>
                    <p>A content strategy is a plan in which you use content to achieve your business goals.</p>
                  </div>
                </Fade>
            </div>
              

    </div>
  )
}

export default Services