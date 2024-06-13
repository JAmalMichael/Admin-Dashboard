import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { BsExclamationCircle } from 'react-icons/bs'

function NavNotice() {
  return (
    <li>
    <a className='nav-link nav-icon' href='#' data-bs-toggle="dropdown">
    <FaRegBell />
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
            <BsExclamationCircle className='text-warning'/>
            <div>
                <h4>Lorem Ipsum</h4>
                <p>Quoe dolorem varitas oditsmeno</p>
            </div>
        </li>






    </ul>
    </li>
  )
}

export default NavNotice