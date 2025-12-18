import React from 'react'


const NavbarOptions = ({ options, isOpen }) => {
  return (
    <ul className='navbar-options' >
        {options.map((option) => (
            <li key={option.text} ><a href={option.url} target='_blank' className='login-button'>{option.text}</a></li>
        ))}
    </ul>
  )
}

export default NavbarOptions
