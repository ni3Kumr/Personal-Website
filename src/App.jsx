import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Header from './component/Header'
import Banner from './component/Banner'
import Aboutme from './component/Aboutme'
import Services from './component/Services'
import Experetise from './component/Experetise'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>Welcome to My Website</h1>
    <h1 className='text-x1 font-bold text-orange-500'>Hello</h1>
    <button className='bg-orange-600 text-white px-4 py-1 rounded-full shadow-lg' >Hire Me</button> */}
    <Header/>
    <Banner/>
    <Aboutme/>
    <Services/>
    <Experetise/>
    <Footer/>
    </>
  )
}

export default App
