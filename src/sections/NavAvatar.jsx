import React, { useState } from 'react'
import profileImg from '../images/user.jpg'
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdPerson } from 'react-icons/io'
import { BsPersonFillGear } from 'react-icons/bs'
import { GoQuestion } from 'react-icons/go'
import { GoSignOut } from 'react-icons/go'

function NavAvatar() {
  const [isShow, setIsShow] = useState(false)
  
  return (
    <li className='relative bg-white  mr-2'>
    <a href="#"
     className='flex items-center justify-center text-gray-600 gap-2'
     onClick={() => {
        setIsShow(!isShow);
     }}
     >
     <img src={profileImg} alt="profile image" className='w-[30px] rounded-full' />
      <span 
      className='text-sm '>J. David</span>
      <IoMdArrowDropdown />
    </a>
    <ul 
    className={`'dropdown-menu  notifications border-2 opacity-0 '
        ${isShow === false ? 'hidden' : 'block absolute bg-white transition-all opacity-100 w-[200px] right-[.2rem]'}`}>
        
    <li className='dropdown-header text-sm py-2 px-1 flex flex-col items-center font-bold'>
    David
    <span className='text-[10px]'>
    Web Developer
    </span>
    </li>

    <li>
        <hr className='dropdown-divider' />
    </li>

        <li className='dropdown-item '>
        <a href='users-profile.html'
        className='text-gray-600 flex gap-2 items-center'>
        <i>
            <IoMdPerson className=' text-xl ml-2'/> </i>
            <div className='text-sm mx-2 my-2'>
                <span>My Profile</span>
            </div>
            </a>
        </li>

        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='dropdown-item '>
        <a href='users-profile.html'
        className='text-gray-600 flex gap-2 items-center'>
        <i>
            <BsPersonFillGear className=' text-xl ml-2'/> </i>
            <div className='text-sm mx-2 my-2'>
                <span>Account Settings</span>
            </div>
            </a>
        </li>

        <li>
        <hr className='dropdown-divider'/>
        </li>

  
        <li className='dropdown-item '>
        <a href='users-profile.html'
        className='text-gray-600 flex gap-2 items-center'>
        <i>
            <GoQuestion className=' text-xl ml-2'/> </i>
            <div className='text-sm mx-2 my-2'>
                <span>Need Help?</span>
            </div>
            </a>
        </li>

        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='dropdown-item'>
        <a href='users-profile.html'
        className='text-gray-600 flex gap-2 items-center'>
        <i>
            <GoSignOut className=' text-xl ml-2'/> </i>
            <div className='text-sm mx-2 my-2'>
                <span>Sign Out</span>
            </div>
            </a>
        </li>
    </ul>
    </li>
  )
}

export default NavAvatar