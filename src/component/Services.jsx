import React, { useState } from 'react'

const Services = () => {
//   const [service, SetService] =  useState([
//     {
//       //  id:1,
//         title:"Java Developer",
//         description:"",
//         button:{
//             title:"",
//             link:""

//         }

//     }

// ])
  return (
    <div className='main-container items-center py-14'>
        <h1 className=' text-5xl text-center underline font-bold'>My Services</h1>
        <div className='services-container  flex  mt-16 space-x-5 px-10'>

        <div className='cursor-pointer hover:bg-gray-100 shadow-lg rounded-xl service1 space-y-3  items-center bg-slate-100 p-5 text-center'> 
              {/* first container */}
              <i class=" text-5xl fa-solid fa-globe"></i>
              <h1 className='text-4xl '>Web Development</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nihil expedita voluptate reprehenderit eum saepe quis id, perferendis soluta autem?</p>
              <button className='px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg'>Check</button>
        </div>
        <div className='cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-3'>
            {/* second container */}
            <i class=" text-5xl fa-brands fa-android"></i>
            <h1 className='text-4xl '>Android Development</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nihil expedita voluptate reprehenderit eum saepe quis id, perferendis soluta autem?</p>
              <button className='px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg'>Check</button>

        </div>
        <div className='cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl service1 space-y-3'>
            {/* third container */}
            <i class=" text-5xl fa-brands fa-java"></i>
            <h1 className='text-4xl '>Backend Developement</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nihil expedita voluptate reprehenderit eum saepe quis id, perferendis soluta autem?</p>
              <button className='px-3 py-2 bg-orange-500 text-1xl rounded-full shadow-lg'>Check</button>

        </div>
        </div>
    </div>
  )
}

export default Services