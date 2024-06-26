import React from 'react'
import Logo from '../sections/Logo'
import SearchBar from './SearchBar'
import Nav from './Nav'

function Header() {
  return (
    <header id='header' className='header flex fixed top-0 items-center transition-all z-[1000] h-[60px]
    shadow-[0px_2px_20px_rgba(1, 41, 112, 0.1)] bg-[#fff] pl-[20px] w-full justify-between'>
    <div className='flex items-center justify-between'>
      <Logo />  
      <SearchBar />
      </div>
      <div>
      <Nav />
      </div>
    </header>
  )
}

export default Header