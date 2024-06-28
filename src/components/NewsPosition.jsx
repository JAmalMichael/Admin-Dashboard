import React from 'react'

function NewsPosition({ item }) {
  return (
    <div className='post-item clearfix'>
        <img src={item.img} alt="" />
        <h4>
            <a href="#"> {item.title} </a>
        </h4>
        <p className='text-sm'>{item.subtitle}...</p>
    </div>
  );
}

export default NewsPosition