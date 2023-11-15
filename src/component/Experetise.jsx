import React from 'react'
import bannerWallpaper from "../assets/banner_wallpaper.svg"

const Experetise = () => {
  return (
    <div className='mt-2' >
        <h1 className='mb-16 text-5xl text-center underline font-bold'>My Expertise
        </h1>
        {/* boxs ection */}
      <div style={
        {
          backgroundImage: `url(${bannerWallpaper})`,
          backgroundSize:"cover" 
        }
    } 
      className=' box-container items-center flex py-16'>

        <div className=' text-white flex justify-center'>
           
         <div className='w-2/3 text-center space-y-4'>
            <h1 className='text-3xl font-bold'>I love these Technologies
             </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, labore.lorem10
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, ratione!
                </p>
            <button className='bg-orange-400 text-1xl px-3 py-2 rounded-full shadow-lg'>
                Hire Me
                </button>
            </div>
        </div>
        <div className='flex justify-center'>
            {/* skills Container */}
            <div className='flex w-2/3 justify-center space-x-3 h-fit flex-wrap '>

            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-3 shadow-lg cursor-pointer '>CORE JAVA</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>JDBC</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>SPRING BOOT</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>POSTMAN</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>HTML</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>CSS</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>JAVA SCRIPT</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>REACT</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>HIBERNATE</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>MY SQL</p>
            <p className='bg-gray-300  text-1xl mt-2 w-fit hover:bg-orange-500 rounded-full px-3 py-2 shadow-lg cursor-pointer '>SPRING SECURITY</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experetise