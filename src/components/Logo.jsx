import React from 'react'

const Logo = ({ logo }) => {
  return (
    <div className='logo'>
        <img src={logo} className='logopng' alt="Zata logo" />
        <p id='zata'>ata</p>
    </div>
  )
}

export default Logo
