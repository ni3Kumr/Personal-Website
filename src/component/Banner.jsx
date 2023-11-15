import React, { useEffect, useRef } from 'react'
import bannerImage from "../assets/nitin4.png"
import bannerWallpaper from "../assets/banner_wallpaper.svg"
import Typed from "typed.js"
const Banner = () => {
  const el =useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer", "Backend Developer","Frontend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 70,
      loop:true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  


  return (
    <div  style={
        {
          backgroundImage: `url(${bannerWallpaper})`,
          backgroundSize:"cover" 
        }
    } className='main-container flex items-center'>
        {/* This is Banner Section  */}
        <div
            className=' w-full flex justify-center text-white'> 
            {/* Banner image and text */}
            <div className='w-2/3 space-y-3 ms-10' >
            <h3 className='text-3xl font-semibold'>Hi, I am </h3>
            <h1 className='text-5xl font-bold'>Nitin Kumar</h1>
            <h2 className='text-3xl '>I am a  <span className="font-bold underline" ref={el}></span></h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi, accusantium quia fuga a voluptates praesentium non unde, delectus perspiciatis velit quaerat nisi repudiandae amet, dicta ratione tempore facere eos 
            </p>
            <div className='icons-container space-x-3 flex'>
                {/* icons div */}
                <a href="" className=' hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>
                <i class="fa-brands fa-facebook text-4xl "></i>

                </a>
                <a href="" className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>
                <i class="fa-brands fa-instagram text-4xl "></i>

                </a>
                <a href="" className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>
                <i class="fa-brands fa-youtube text-4xl "></i>

                </a>
                <a href="" className='hover:bg-orange-600 border cursor-pointer px-3 py-4 w-14 h-14 rounded-full flex justify-center items-center bg-gray-800'>
                <i class="fa-brands fa-linkedin text-4xl "></i>
                </a>
                

            </div>
            <br />
            <a href="" className=' text-1xl px-3 py-2 bg-orange-500 shadow rounded-full text-1xl'>Contact Me</a>

            </div>
        </div>

    {/* second div */}
        <div className='w-full flex justify-center'>
            {/* user Photo */}
            <img className='my-2 rounded-full shadow-lg w-fit h-84' src={bannerImage} alt="NO Image Avilable" />

        </div>
    </div>
  )
}

export default Banner