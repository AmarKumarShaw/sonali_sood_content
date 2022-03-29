import React from 'react';
import "./about.css";
import Fade from "react-reveal/Fade"

const About = () => {
  return (
    <div className="about">
    <Fade top>
      <div className="about-head service-head">
          <p>Who am I ?</p>
          <h1>About Me</h1>
      </div>
    </Fade>

      <div className="about-section">
          <Fade left>
            <div className="about-left">
        
          <img className='personal-img' src="./images/sonali_mask.png" alt="" />
            </div>
          </Fade>
          <Fade right>
            <div className="about-right">
                    <h2>Hi I'm</h2>
                    <h1>Sonali Sood</h1>
                    <h2>Content Writer</h2>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam amet atque ipsa sapiente possimus repellat, ut veniam ex consequuntur perspiciatis facilis laboriosam accusantium eum, minus natus excepturi delectus quis? Mollitia temporibus impedit ipsam saepe.</p> */}
                    <p className='text-gray'>I am Sonali, a freelance content designer and social media manager with specialty in providing deep-researched high-quality content for your impactful online presence.

<br /> <br /> "The right set of words can win people and the world "
</p>
            </div>
          </Fade>
        </div>
    
    </div>
  )
}

export default About