import React from 'react'
import NavNotice from '../sections/NavNotice'
import NavMessage from '../sections/NavMessage'
import NavAvatar from '../sections/NavAvatar'

function Nav() {
  return (
    <nav className='header-nav'>
        <ul className="flex items-center list-none">
        <NavNotice className=""/>
        <NavMessage className=""/>
        <NavAvatar className=""/>
        </ul>
    </nav>
  )
}

export default Nav