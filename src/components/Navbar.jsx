import React from 'react'
import { useState } from 'react'
import logo from './logo.png'
import Logo from './Logo'
import NavbarOptions from './NavbarOptions'
import NavbarButtons from './NavbarButtons'
import { FiMenu } from 'react-icons/fi'

const Navbar = ({ handleClick, isOpen, options }) => {


  return (
    <nav className='navbar'>
        <Logo logo={logo}/>
        <FiMenu onClick={handleClick} className='hamburger-icon'/>
        {/* Desktop Menu */}
        <div className='buttonsandoptions'>
          <NavbarOptions isOpen={isOpen} options={options}/>
          <NavbarButtons/>
        </div>

        {/* Mobile Menu */}
        {!isOpen && (
          <div>
            <NavbarOptions isOpen={isOpen} options={options}/>
          </div>
        )}
    </nav> 
  )
}

export default Navbar
