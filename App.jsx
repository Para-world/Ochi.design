import React from 'react'
import Navbar from './Componenets/Navbar'
import Landing from './Componenets/Landing'
import Marquee from './Componenets/Marquee'
import About from './About'
import Eyes from './Eyes'
import Featured from './Featured'
import Cards from './Componenets/Cards'
import Footer from './Componenets/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-zinc-900 w-full min-h-screen text-white bg-zinc-900 '>
        <Navbar/>
        <Landing/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        <Cards/>
        <Footer/>

    </div>
      
    
  )
}

export default App
