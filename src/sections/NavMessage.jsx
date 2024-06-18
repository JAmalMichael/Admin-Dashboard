import React, { useState } from 'react'
import { CiChat2 } from 'react-icons/ci' 

function NavMessage() {
  const [isShow, setIsShow] = useState(false)

  return (
    <li className='relative bg-white  mr-2'>
    <a href="#"
     className=''
     onClick={() => {
        setIsShow(!isShow);
     }}
     >
      <CiChat2 className='text-[28px] font-bold' />
      <span 
      className='z-999 rounded-full bg-green-600 text-white text-[10px]
      p-1 absolute right-0 top-[-8px]'>3</span>
    </a>
    <ul 
    className={`'dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications border-2 opacity-0'
        ${isShow === false ? 'hidden' : 'block absolute bg-white transition-all opacity-100 w-[250px] right-[.2rem]'}`}>
        
    <li className='dropdown-header text-sm py-1 px-1'>
    You have 3 new messages
    <a href='#' >
    <span className='badge rounded-full text-white p-2 m-1 text-[10px]'>
    View all
    </span>
    </a>
    </li>

    <li>
        <hr className='dropdown-divider' />
    </li>

        <li className='message-item '>
        <a href="#"
        className='flex items-center justify-around px-2 gap-2 text-gray-600'>
        <img 
          src="assets/items/messages-1.jpg"
          alt='message 1'
          className='rounded-full w-[40px]'
        />
            <div className='text-sm mx-2 my-2'>
                <h4 className='font-bold'>Madalene Mensa.</h4>
                <p>Thanks for a quick turnaround in A/B landing page testing.</p>
                <p className='text-[10px]'>4 hrs. ago</p>
            </div>
            </a>
        </li>

        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='message-item '>
        <a href="#"
        className='flex items-center justify-around px-2 gap-2 text-gray-600'>
        <img 
          src="assets/items/messages-2.jpg"
          alt='message 2'
          className='rounded-full w-[40px]'
        />
            <div className='text-sm mx-2 my-2'>
                <h4 className='font-bold'>Jessica Ember</h4>
                <p>Hi, just a quick reminder that we have our annual meeting by 10:00 am</p>
                <p className='text-[10px]'>6 hrs. ago</p>
            </div>
            </a>
        </li>

        <li>
        <hr className='dropdown-divider'/>
        </li>

        <li className='message-item '>
        <a href="#"
        className='flex items-center justify-around px-2 gap-2 text-gray-600'>
        <img 
          src="assets/items/messages-3.jpg"
          alt='message 3'
          className='rounded-full w-[40px]'
        />
            <div className='text-sm mx-2 my-2'>
                <h4 className='font-bold'>Wilson Smith</h4>
                <p>I just sent you the updated mockups for the blog post series.</p>
                <p className='text-[10px]'>7 hrs. ago</p>
            </div>
            </a>
        </li>


        <li>
        <hr className='dropdown-divider'/>
        </li>

                <li className=''>
                <hr className='dropdown-divider'/>
                </li>
                <li className='dropdown-footer text-sm py-2 px-2'>
                <a href='#'>Show all messagess</a>
                </li>


    </ul>
    </li>
  )
}

export default NavMessage