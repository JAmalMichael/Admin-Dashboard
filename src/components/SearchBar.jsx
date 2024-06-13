import React from 'react'
import { CiSearch } from 'react-icons/ci'

function SearchBar() {
  return (
    <div className='search-bar w-[360px] py-0 px-0 left-0 p-[20px] sm:opacity-[100] mx-4
    shadow-[0px_0px_15px_0px_rgba(1,41,112,0.1)] bg-white z-[9999] transition-all hidden opacity-0 sm:block'>
        <form 
        method='POST'
        action='#'
        className='search-form flex items-center w-full'>
            <input 
            type='text'
            name='Query'
            placeholder='Search'
            title='Enter search Keyword'
            className='border w-full transition-all border-r-4 py-[7px] pr-[38px] pl-[8px] border-[rgba(1,41,112,0.2)] text-[#012970]
            focus:outline-none focus:shadow-md focus:border focus:border-[rgba(1,41,112,0.3)] 
             hover:outline-none hover:shadow-md hover:border hover:border-[rgba(1,41,112,0.3)]'
            />
            <button type='submit' title='search' className='border-none p-0 ml-[-30px] bg-none'>
           <CiSearch className='text-[#012970]'/>
            </button>
        </form>
    </div>
  )
}

export default SearchBar