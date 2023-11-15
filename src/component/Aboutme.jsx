import React, { useState } from 'react'
import bannerImage from "../assets/nitin3o.jpg"
const Aboutme = () => {
 const [data , setData] = useState({
        image:bannerImage,
        title:"Java Developer",
        desc:"And I am a Backend Developer",
        desc2:`ctetur adipisicing elit. Natus excepturi, accusantium quia fuga a voluptates praesentium non unde, delectus perspiciatis velit quaerat nisi repudiandae amet, dicta ratione tempore facere eos`,
        actionButton:{
            title:"Read More..",
            link:"/readmore"
        }
    })
  return (
    <div className='bg-gray-50 main-container  items-center py-16'>
        <h1 className='pb-16 text-center text-5xl underline font-bold'>About Me</h1>
        <div className='flex'>

        <div className='w-full flex justify-center'>
            {/* image container */}
            <img className='rounded-full shadow-lg w-fit h-84' src={bannerImage} alt="NO Image Avilable" />

        </div >
        <div className='w-full flex justify-center'>
            {/* text container */}
            {/* Banner image and text */}
            <div className='w-2/3 space-y-5 ms-10 bg-balck' >
            <h1 className='text-5xl font-bold'>{data.title}</h1>
            <p className='text-3xl '>{data.desc}</p>
            <p className='text-3xl'>{data.desc2}</p>
            <button className='bg-orange-500 py-3 px-3 text-1xl rounded-full shadow-lg' >{data.actionButton.title}</button>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Aboutme