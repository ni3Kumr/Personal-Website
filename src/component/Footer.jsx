import React from 'react'

const Footer = () => {
  return (
   <>
   <div className='flex justify-between py-5 px-72 bg-gray-200'>
    <div>
        {/* text */}
        <p>
            @2023 Nitin Kumar <span>All Rights Reserved</span>
        </p>

    </div>
    <div className='space-x-5'>
        {/* links */}
        <a href="#about"className='hover:underline'>About</a>
        <a href="#about"className='hover:underline'>Privacy Policy</a>
        <a href="#about"className='hover:underline'>Licencing</a>
        <a href="#about"className='hover:underline'>Contact</a>
    </div>
   </div>
   </>
  )
}

export default Footer