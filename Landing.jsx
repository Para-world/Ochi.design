import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUp } from "react-icons/fa6";

function Landing() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["We Create","Eye Opening","Presentations"].map((item, index)=>{
                return   <div className='masker'>
            <div className='w-fit flex  overflow-hidden items-center'>
                {index === 1 &&(
                    <motion.div  initial={{width: 0}}
                     animate={{width: "9vw"}}
                      transition={{ease:[0.76, 0, 0.24, 1], duration:1 }} 
                      className='w-[9vw] h-[5vw] relative  rounded-md bg-green-500 mt-2.5'></motion.div>)}
            <h1 className='uppercase text-[7vw] h-full leading-[6vw] tracking-tighter font-["Founders_Grotesk_X_Condensed
                "] font-bold'>
                    {item}
                </h1>
                </div>
                
            </div>
            
            })}
          
        </div>
        <div className='border-[1px] border-zinc-800 mt-20  flex justify-between items-center px-5 py-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item, index)=>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 text-md uppercase font-light rounded-full'>
                    Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                   <span className='rotate-[45deg]'>
                   <FaArrowUp/>
                   </span>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Landing
