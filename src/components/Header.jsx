import React from 'react'
import Logo from '../sections/logo'
import SearchBar from './SearchBar'
import Nav from './Nav'

function Header() {
  return (
    <header id='header' className='header flex fixed items-center transition-all z-997 h-[60px]
    shadow-[0px_2px_20px_rgba(1, 41, 112, 0.1)] bg-[#fff] pl-[20px] w-full'>
      <Logo />  
      <SearchBar />
      <Nav />
    </header>
  )
}

export default Header