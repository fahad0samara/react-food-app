import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

function Work() {
    const workInfoData = [
        {
          image: PickMeals,
          title: "Quality Assurance",
          text: "Our chefs use only the freshest ingredients to create delicious and healthy meals that are sure to satisfy your taste buds. We take great care to ensure that every dish is prepared to the highest standards of quality and hygiene.",
        },
        {
          image: ChooseMeals,
          title: "Customizable Orders",
          text: "Our menu offers a wide variety of dishes to choose from, ensuring that there is something for everyone. You can customize your order to suit your preferences and dietary requirements.",
        },
        {
          image: DeliveryMeals,
          title: "Good Fast Deliveries",
          text: "Our efficient delivery service ensures that your meal arrives promptly, so you can enjoy your food fresh and hot without any unnecessary delays.",
        },
      ];
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <h1 className='primary-heading'>How It Work</h1>
            <p className='primary-text'>
                Our process is simple and efficient, ensuring that you get the best quality food delivered to your doorstep in no time.
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data)=>(
                <div className='work-section-info' key={data.title}>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=''/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work