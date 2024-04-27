import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
        <h3>Header</h3>
        <div className='left-header'>
            <NavLink className='navlink' to={'/'}>Signup</NavLink>
            <NavLink className='navlink' to={'profile'}>Profile</NavLink>
        </div>
    </div>
  )
}

export default Header