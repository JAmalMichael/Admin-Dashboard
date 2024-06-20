import React, { useState } from 'react'
import './Styles/sidebar.css';
import { FaChevronDown } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaWpforms } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { GiBoxingGloveSurprise } from 'react-icons/gi';
import navList from "../data/navItem";
import NavItem from '../sections/NavItem';

function SideBar() {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const dropdowns = ["nav-content1", "nav-content2", "nav-content3", "nav-content4", "nav-content5" ]
    
  

  return (
    <div id='sidebar' className='sidebar h-screen'>
        <ul id='sidebar-nav' className='sidebar-nav'>
            <li className='nav-item '>
            <a href="" className=' text-gray-600 flex items-center'>
            <i
            className="">
            <RxDashboard />
            </i>
            <span className='nav-heading'>Dashboard</span>
            </a>
            </li>

            <li className='nav-item '>
            <a
              className='nav-link flex items-center justify-between'
              href='#'
              onClick={() => {
                setExpandedIndex((prevExpandedIndex) => (prevExpandedIndex === 0 ? dropdowns[0] : 0));
              }}
            >
            <div className='flex items-center'>
              <i><IoDocumentTextOutline /> </i>
              <span className='text-[#012970]'>Documents</span>
              </div>
              <i className=''>
              <FaChevronDown className={` ${expandedIndex === 'nav-content1' ? '' : 'rotate-180' }`} />
              </i>
            </a>
              <ul 
              id='components-nav'
              className={`nav-content1 ${expandedIndex === 'nav-content1' ? 'block opacity-100 transition-all' :
                 'hidden opacity-0' }`}>
              
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
                setExpandedIndex((prevExpandedIndex) => (prevExpandedIndex === 0 ? dropdowns[1] : 0));
              }}
            >
            <div className='flex items-center'>
              <i className='journal-text'><FaWpforms /></i>
              <span>Forms</span>
              </div>
              <i className='chevron-down'>
              <FaChevronDown className={` ${expandedIndex === 'nav-content2' ? '' : 'rotate-180' }`} />
              </i>
            </a>

            <ul 
            id='forms-nav'
            className={`nav-content2 ${expandedIndex === 'nav-content2' ? 'block opacity-100 transition-all' :
              'hidden opacity-0' }`}>
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
                setExpandedIndex((prevExpandedIndex) => (prevExpandedIndex === 0 ? dropdowns[2] : 0));
              }}
            >
            <div className='flex items-center'>
              <i className='journal-text'><FaTable /></i>
              <span>Tables</span>
              </div>
              <i className='chevron-down'>
              <FaChevronDown className={` ${expandedIndex === 'nav-content3' ? '' : 'rotate-180' }`} />
              </i>
            </a>

            <ul 
            id='forms-nav'
            className={`nav-content3 ${expandedIndex === 'nav-content3' ? 'block opacity-100 transition-all' :
              'hidden opacity-0' }`}>
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
                setExpandedIndex((prevExpandedIndex) => (prevExpandedIndex === 0 ? dropdowns[3] : 0));
              }}
            >
            <div className='flex items-center'>
              <i className='journal-text'> <FaChartBar /> </i>
              <span>Charts</span>
              </div>
              <i className='chevron-down'>
              <FaChevronDown className={` ${expandedIndex === 'nav-content4' ? '' : 'rotate-180' }`} />
              </i>
            </a>

            <ul 
            id='forms-nav'
            className={`nav-content4 ${expandedIndex === 'nav-content4' ? 'block opacity-100 transition-all' :
              'hidden opacity-0' }`}>
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
                setExpandedIndex((prevExpandedIndex) => (prevExpandedIndex === 0 ? dropdowns[4] : 0));
              }}
            >
            <div className='flex items-center'>
              <i className='journal-text'> <GiBoxingGloveSurprise /> </i>
              <span>Icons</span>
              </div>
              <i className='chevron-down'>
              <FaChevronDown className={` ${expandedIndex === 'nav-content5' ? '' : 'rotate-180' }`} />
              </i>
            </a>

            <ul 
            id='forms-nav'
            className={`nav-content5 ${expandedIndex === 'nav-content5' ? 'block opacity-100 transition-all' :
              'hidden opacity-0' }`}>
              <li >
                <a href='#' className='text-[#012970]'>
                 <i></i>
                 <span>Bootstrap Icons</span>
                </a>
              </li>
              <li>
              <a href="#" className='text-[#012970]'>
              <i></i>
              <span>Remix Icons</span>
              </a>
              </li>

              <li>
              <a href="#" className='text-[#012970]'>
              <i></i>
              <span>Boxicons</span>
              </a>
              </li>
              </ul>
            </li>

            <li className="nav-heading">Pages</li>
            
            {navList.map(nav => (
                <NavItem key={nav._id} nav={nav} />
               ))}
        </ul>
    </div>
  )
}

export default SideBar