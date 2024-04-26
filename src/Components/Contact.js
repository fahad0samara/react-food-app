import React from 'react'

function Contact() {
  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>
            Contact Us
        </h1>
        <h1 className='primary-heading'>
            Feel Free To Contact Us
        </h1>
        <div className='contact-form-container'>
            <input type='text' placeholder='food@gmail.com'></input>
            <button className='secondary-button'>Submit</button>
        </div>
    </div>
  )
}

export default Contact