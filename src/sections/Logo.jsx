import React from 'react'
import { FaList } from 'react-icons/fa';

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    }

  return (
    <div className='flex items-center w-[250px] justify-between'>
        <a href='/' className='flex items-center leading-1'>
        <span className='block text-lg text-[26px] font-bold text-[#012970] font-sans'>
        AdminDashboard</span>
        </a>    
          <FaList 
          onClick={handleToggleSideBar}
          className='toggle cursor-pointer'
          />  
    </div>
  )
}

export default Logo