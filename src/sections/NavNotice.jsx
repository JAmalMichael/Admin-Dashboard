import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BsExclamationCircle } from 'react-icons/bs'
import { CiCircleCheck } from 'react-icons/ci'
import { CiCircleInfo } from 'react-icons/ci'
import { CiCircleRemove } from 'react-icons/ci'

function NavNotice() {
  return (
    <li>
    <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
    <i><FaRegBell /></i>
    <span className='badge badge-number'>4</span>
    </a>

    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
    <li className='dropdown-header'>
    You have 4 new notifications
    <a href='#' >
    <span className='badge rounded-pill p-2 m-2'>
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

                <li>
                <hr className='dropdown-divider'/>
                </li>
                <li className='dropdown-footer'>
                <a href='#'>Show all notifications</a>
                </li>


    </ul>
    </li>
  )
}

export default NavNotice;