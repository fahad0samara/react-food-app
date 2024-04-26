import React from 'react'
import Navbar from './Navbar'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
                <img src={BannerBackground} alt=""/>
            </div>
            <div className='home-text-section'>
                <h1 className='primary-heading'>
                    Delicious Food, Delivered To You, With Love

                </h1>
                <p className='primary-text'>
                    Enjoy the best meals from our kitchen to your home,
                    without the hassle of preparing it yourself.
                </p>
                <button className='secondary-button'>
                    Order Now..
                     <FiArrowRight/>{""}
                </button>
            </div>
            <div className='home-image-section'>
                <img src={BannerImage} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Home