import React from 'react'
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <div className='text-white '>
      <div className='flex flex-col max-w-lg w-full h-screen text-center items-center mx-auto mt-20'>
        <p className='uppercase font-bold p-2 text-[#00df9a]'>Grow with data analytics</p>
        <h1 className='text-2xl md:text-3xl sm:text-4xl md:py-2'>GROW WITH DATA.</h1>
        <div className='flex text-xl md:text-2xl sm:text-3xl'>
        <p className=''>
          Fast, Flexiable Finalcial For 
        </p>
        <ReactTyped
        className='pl-2'
                strings={[
                  'BTB',
                  'BTC',
                  'SASS',
               ]}
                typeSpeed={120}
                backSpeed={140}
            loop
          />
         </div> 
         <button className='bg-[#00df9a] rounded-lg py-2 my-6 mx-auto w-[200px] text-black'>
          Get Started
         </button>
      </div>
      
    </div>
  )
}
