import React, { useState } from 'react'
import './Styles/sidebar.css';
import { FaChevronDown } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaWpforms } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { GiBoxingGloveSurprise } from 'react-icons/gi';

function SideBar() {
    const [expandedIndex, setExpandedIndex] = useState(false);
    
   

  return (
    <div id='sidebar' className='sidebar'>
        <ul id='sidebar-nav' className='sidebar-nav'>
            <li className='nav-item '>
            <a href="" className=' text-gray-600 flex items-center gap-2'>
            <i
            className="">
            <RxDashboard />
            </i>
            <span>Dashboard</span>
            </a>
            </li>

            <li className='nav-item '>
            <a
              className='nav-link flex items-center justify-between'
              href='#'
              onClick={() => {
                setExpandedIndex(!expandedIndex);
              }}
            >
            <div className='flex items-center'>
              <i><IoDocumentTextOutline /> </i>
              <span>Documents</span>
              </div>
              <i className=''>
              <FaChevronDown className={` ${expandedIndex === false ? '' : 'rotate-180' }`} />
              </i>
            </a>
              <ul 
              id='components-nav'
              className={`nav-content1 ${expandedIndex === false ? 'hidden opacity-0' :
                 'block opacity-100 transition-all' }`}>
              
              <li >
                <a href='#' className='text-[#012970]'>
                 <i></i>
                 <span>Customers</span>
                </a>
              </li>
              <li>
              <a href="#" className='text-[#012970]'>
              <i></i>
              <span>Suppliers</span>
              </a>
              </li>

              <li>
              <a href="#" className='text-[#012970]'>
              <i></i>
              <span>Logistics</span>
              </a>
              </li>
              </ul>
            </li>

            <li className='nav-item'>
            <a
              className='nav-link nav-link flex items-center justify-between'
              href='#'
              onClick={() => {
                setExpandedIndex(!expandedIndex);
              }}
            >
            <div className='flex items-center'>
              <i className='journal-text'><FaWpforms /></i>
              <span>Forms</span>
              </div>
              <i className='chevron-down'><FaChevronDown 
              className={` ${expandedIndex === false ? '' : 'rotate-180' }`}/></i>
            </a>

            <ul 
            id='forms-nav'
            className={`nav-content2 ${expandedIndex === false ? 'hidden opacity-0' :
              'block opacity-100 transition-all' }`}>
            <li >
              <a href='#' className='text-[#012970]'>
              <i></i>
              <span>Application Form</span>
              </a>
            </li>

            <li>
            <a href='#' className='text-[#012970]'>
            <i></i>
            <span>Release Form</span>
            </a>
          </li>

          <li>
          <a href='#' className='text-[#012970]'>
          <i></i>
          <span>Cancellation Form</span>
          </a>
        </li>
            </ul>
            </li>

            <li className='nav-item'>
            <a
              className='nav-link nav-link flex items-center justify-between'
              href='#'
              onClick={() => {
                setExpandedIndex(!expandedIndex);
              }}
            >
            <div className='flex items-center'>
              <i className='journal-text'><FaTable /></i>
              <span>Tables</span>
              </div>
              <i className='chevron-down'><FaChevronDown 
              className={` ${expandedIndex === false ? '' : 'rotate-180' }`}/></i>
            </a>

            <ul 
            id='forms-nav'
            className={`nav-content3 ${expandedIndex === false ? 'hidden opacity-0' :
              'block opacity-100 transition-all' }`}>
            <li>
              <a href='#' className='text-[#012970]'>
              <i></i>
              <span>General Table</span>
              </a>
            </li>

            <li>
            <a href='#' className='text-[#012970]'>
            <i></i>
            <span>Data Table</span>
            </a>
          </li>
            </ul>
            </li>

            <li className='nav-item'>
            <a
              className='nav-link nav-link flex items-center justify-between'
              href='#'
              onClick={() => {
                setExpandedIndex(!expandedIndex);
              }}
            >
            <div className='flex items-center'>
              <i className='journal-text'> <FaChartBar /> </i>
              <span>Charts</span>
              </div>
              <i className='chevron-down'><FaChevronDown 
              className={` ${expandedIndex === false ? '' : 'rotate-180' }`}/></i>
            </a>

            <ul 
            id='forms-nav'
            className={`nav-content4 ${expandedIndex === false ? 'hidden opacity-0' :
              'block opacity-100 transition-all' }`}>
            <li>
              <a href='#' className='text-[#012970]'>
              <i></i>
              <span></span>
              </a>
            </li>

            <li>
            <a href='#' className='text-[#012970]'>
            <i></i>
            <span></span>
            </a>
          </li>

          <li>
          <a href='#' className='text-[#012970]'>
          <i></i>
          <span></span>
          </a>
        </li>
            </ul>
            </li>
            <li className='nav-item'>
            <a
              className='nav-link nav-link flex items-center justify-between'
              href='#'
              onClick={() => {
                setExpandedIndex(!expandedIndex);
              }}
            >
            <div className='flex items-center'>
              <i className='journal-text'> <GiBoxingGloveSurprise /> </i>
              <span>Icons</span>
              </div>
              <i className='chevron-down'><FaChevronDown 
              className={` ${expandedIndex === false ? '' : 'rotate-180' }`}/></i>
            </a>

            <ul 
            id='forms-nav'
            className={`nav-content6 ${expandedIndex === false ? 'hidden opacity-0' :
              'block opacity-100 transition-all' }`}>
            <li>
              <a href='#' className='text-[#012970]'>
              <i></i>
              <span></span>
              </a>
            </li>

            <li>
            <a href='#' className='text-[#012970]'>
            <i></i>
            <span></span>
            </a>
          </li>

          <li>
          <a href='#' className='text-[#012970]'>
          <i></i>
          <span></span>
          </a>
        </li>
            </ul>
            </li>

        </ul>
    </div>
  )
}

export default SideBar