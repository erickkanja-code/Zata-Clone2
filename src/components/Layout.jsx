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

    const options= [{url: '', text: 'Home'}, {url: 'https://play.google.com/store/apps/details?id=com.zata.app&pcampaignid=web_share', text: 'Get Invoice App'}, {url: 'https://docs.zata.rw/', text: 'API Docs'}];



  return (
    <div>
      <Navbar isOpen={isOpen} handleClick={handleClick} options={options}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
