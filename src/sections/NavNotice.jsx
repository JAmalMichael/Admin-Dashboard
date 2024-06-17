import React, { useState } from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BsExclamationCircle } from 'react-icons/bs'
import { CiCircleCheck } from 'react-icons/ci'
import { CiCircleInfo } from 'react-icons/ci'
import { CiCircleRemove } from 'react-icons/ci'

function NavNotice() {
    const [isShow, setIsShow] = useState(false)


  return (
    <li className='relative bg-white  mr-2'>
    <a href="#"
     className=''
     onClick={() => {
        setIsShow(!isShow);
     }}
     >
      <FaRegBell className='text-[25px] ml-[230px]' />
      <span 
      className='z-999 rounded-full bg-blue-600 text-white text-[10px]
      p-1 absolute right-0 top-[-8px]'>4</span>
    </a>
    <ul className={`'dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications border-2 opacity-0'
        ${isShow === false ? 'hidden' : 'block absolute bg-white transition-all opacity-100'}`}>
        
    <li className='dropdown-header text-sm py-1 px-1'>
    You have 4 new notifications
    <a href='#' >
    <span className='badge rounded-full text-white p-2 m-1 text-[10px]'>
    View all
    </span>
    </a>
    </li>
    <li>
        <hr className='dropdown-divider' />
    </li>

        <li className='notification-item flex items-center justify-around px-2'>
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

        <li className='notification-item flex items-center justify-around px-2'>
        <i>
            <CiCircleRemove className='text-failed text-red-500 text-xl mr-2'/> </i>
            <div className='text-sm mx-2 my-2'>
                <h4>Lorem Ipsum</h4>
                <p>Quoe dolorem varitas oditsmeno</p>
                <p>30 minss. ago</p>
            </div>
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

export default NavNotice;