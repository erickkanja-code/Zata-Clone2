import React from 'react'
import line from './line.svg'
import Play from './Play.png'
import Logo from './Logo'

const Hero = () => {
  return (
    <section className='hero'>
      <p id='hero-title'>Zero Tax Drama</p>
      <img src={line} id='hero-image' alt="title underline" />
      <p className='hero-paragraph' id='hero-subhead1'>Rwanda's most stress free Tax Automation API</p>
      <p className='hero-paragraph' id='hero-subhead2'>Integrate fast, stay compliant, and keep your workflows moving</p>
      <div className='hero-buttons'>
        <button className='signup-button'>Sign Up</button>
        <div className='docs-button'>
          <img id='play' src={Play} alt="play button icon" />
          <button id='docs'>Docs</button>
        </div>
      </div>
     
    </section>
  )
}

export default Hero
