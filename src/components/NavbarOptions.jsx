import React from 'react'


const NavbarOptions = ({ options, isOpen }) => {
  return (
    <ul className='navbar-options' >
        {options.map((option, index) => (
            <li key={option} id={option}>{option}</li>
        ))}
    </ul>
  )
}

export default NavbarOptions
