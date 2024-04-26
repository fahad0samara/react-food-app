import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

function Testimonial() {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className="primary-text">
                We believe that food is a key to a healthy lifestyle. Our mission is
                to provide you with the best quality food that is delicious and
                healthy. We are committed to providing you with the best quality food
                that is delicious and healthy.
        </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt=''></img>
            <div className='testimonial-starts-container'>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>
                "The best food I have ever had! I will definitely be ordering again!"
            </h2>
        </div>
    </div>
  )
}

export default Testimonial