import React, { useState } from 'react'
import profileImg from '../images/user.jpg'
import { IoMdArrowDropdown } from 'react-icons/io'
import { BsExclamationCircle } from 'react-icons/bs'
import { CiCircleCheck } from 'react-icons/ci'
import { CiCircleInfo } from 'react-icons/ci'


function NavAvatar() {
  const [isShow, setIsShow] = useState(false)
  
  return (
    <li className='relative bg-white  mr-2'>
    <a href="#"
     className=''
     onClick={() => {
        setIsShow(!isShow);
     }}
     >
     <img src={profileImg} alt="profile image" className='' />
      <span 
      className='z-999 rounded-full bg-blue-600 text-white text-[10px]
      p-1 absolute right-0 top-[-8px]'>J. David</span>
      <IoMdArrowDropdown />
    </a>
    <ul className={`'dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications border-2 opacity-0'
        ${isShow === false ? 'hidden' : 'block absolute bg-white transition-all opacity-100'}`}>
        
    <li className='dropdown-header text-sm py-1 px-1'>
    David
    <span className=''>
    Web Developer
    </span>
    </li>

    <li>
        <hr className='dropdown-divider' />
    </li>

        <li className='dropdown-item flex items-center justify-around px-2'>
        <i>
            <BsExclamationCircle className='text-warning text-yellow-500 text-xl mr-2'/> </i>
            <div className='text-sm mx-2 my-2'>
                <h4>Lorem Ipsum</h4>
                <p>Quoe dolorem varitas oditsmeno</p>
                <p>30 mins. ago</p>
            </div>
        </li>

        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className=''>
        <a></a>
        <i></i>
        <span>My Profile</span>
        </li>
        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item flex items-center justify-around px-2'>
        <i>
        <CiCircleCheck className='text-success text-green-500 text-xl mr-2'/> </i>
        <div className='text-sm mx-2 my-2'>
            <h4>Lorem Ipsum</h4>
            <p>Quoe dolorem varitas oditsmeno</p>
            <p>2 hrs. ago</p>
        </div>
    </li>


        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item flex items-center justify-around px-2'>
        <i>
        <CiCircleInfo className='text-primary text-blue-500 text-xl mr-2'/> </i>
        <div className='text-sm mx-2 my-2'>
            <h4>Lorem Ipsum</h4>
            <p>Quoe dolorem varitas oditsmeno</p>
            <p>4 hrs. ago</p>
        </div>
    </li>

                <li className=''>
                <hr className='dropdown-divider'/>
                </li>
                <li className='dropdown-footer text-sm py-2 px-2'>
                <a href='#'>Show all notifications</a>
                </li>


    </ul>
    </li>
  )
}

export default NavAvatar