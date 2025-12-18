import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'

const Layout = () => {
    const [ isOpen, setIsOpen ] = useState('false');

    const handleClick = () => {
      setIsOpen(!isOpen);
    }

    const options= ['Home', 'Get Invoice App', 'Pricing', 'API Docs'];



  return (
    <div>
      <Navbar isOpen={isOpen} handleClick={handleClick} options={options}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
