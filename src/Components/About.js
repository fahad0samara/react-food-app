import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/d.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          We Believe That Food Is A Key To A Healthy Lifestyle
        </h1>
      
        <p className="primary-text">
          We believe that food is a key to a healthy lifestyle. Our mission is
          to provide you with the best quality food that is delicious and
          healthy. We are committed to providing you with the best quality food
          that is delicious and healthy.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
            Learn More..
          </button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> 
            Watch Video..
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;