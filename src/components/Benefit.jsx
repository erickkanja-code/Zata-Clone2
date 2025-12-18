import React from 'react'
import tick from '../graphics/Subtract.png'


const Benefit = () => {
  return (
<section className="benefit">
      <div className='benefit-left-container'>
        <p id='benefitp1'>What Benefits Will You Get</p>
        <ul className='benefit-list'>
          <li className='benefit-list-item'>
            <img src={tick} className='tick' alt="" />
            <p>Multi-branch point-of-sale solution to streamline your retail operations.</p>
          </li>
          <li className='benefit-list-item'>
            <img src={tick} className='tick' alt="" />
            <p>Seamless Electronic Billing Machine compliance for Rwandan businesses.</p>
          </li>          <li className='benefit-list-item'>
            <img src={tick} className='tick' alt="" />
            <p>Industry-leading payment security standards for your peace of mind.</p>
          </li>          <li className='benefit-list-item'>
            <img src={tick} className='tick' alt="" />
            <p>Seamless integration with leading accounting and ERP systems.</p>
          </li>          
          <li className='benefit-list-item'>
            <img src={tick} className='tick' alt="" />
            <p>Connect with your favorite third-party tools and systems easily.</p>
          </li>
        </ul>
      </div>
    <iframe
      width="400"
      height="200"
      src="https://www.youtube.com/embed/i0Ni3k4qH28?start=8"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>


    </section>
  )
}

export default Benefit
