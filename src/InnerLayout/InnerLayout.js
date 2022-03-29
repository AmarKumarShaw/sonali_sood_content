import React from 'react'
import "./innerlayout.css"
import Services from './../Services/Services';
import About from './../About/About';
import Review from './../Review/Review';
import Contact from './../Contact/Contact';
import LightSpeed from 'react-reveal/LightSpeed'; 
import Testimonial from './../Testimonial/Testimonial';


const InnerLayout = () => {
  return (
    <div  className='inner-layout'>
      
        <Services />
  
        <About />
        <Review />
        {/* <Testimonial /> */}
        <Contact />
    </div>
  )
}

export default InnerLayout