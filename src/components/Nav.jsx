import React from 'react'
import NavNotice from '../sections/NavNotice'
import NavMessage from '../sections/NavMessage'
import NavAvatar from '../sections/NavAvatar'

function Nav() {
  return (
    <nav className='header-nav flex'>
   
        <ul className=" items-center list-none flex">
        <NavNotice className="mr-2"/>
        <NavMessage />
        <NavAvatar />
        </ul>
    </nav>
  )
}

export default Nav