import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BsExclamationCircle } from 'react-icons/bs'
import { CiCircleCheck } from 'react-icons/ci'
import { CiCircleInfo } from 'react-icons/ci'
import { CiCircleRemove } from 'react-icons/ci'

function NavNotice() {
  return (
    <li className='relative top-[250px] bg-white  '>
    <a className='nav-link nav-icon relative ' href='#' data-bs-toggle="dropdown">
    <FaRegBell 
    className='mr-0 text-[20px]'/>
    <span className='badge badge-number absolute text-[2px] rounded-full
    text-white'>4</span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications border-2'>
    <li className='dropdown-header text-sm py-4 px-2'>
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

        <li className='notification-item'>
        <i>
            <BsExclamationCircle className='text-warning'/> </i>
            <div>
                <h4>Lorem Ipsum</h4>
                <p>Quoe dolorem varitas oditsmeno</p>
                <p>30 minss. ago</p>
            </div>
        </li>

        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item'>
        <i>
            <CiCircleRemove className='text-failed'/> </i>
            <div>
                <h4>Lorem Ipsum</h4>
                <p>Quoe dolorem varitas oditsmeno</p>
                <p>30 minss. ago</p>
            </div>
        </li>

        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item'>
        <i>
        <CiCircleCheck className='text-success'/> </i>
        <div>
            <h4>Lorem Ipsum</h4>
            <p>Quoe dolorem varitas oditsmeno</p>
            <p>2 hrs. ago</p>
        </div>
    </li>


        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='notification-item'>
        <i>
        <CiCircleInfo className='text-primary'/> </i>
        <div>
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