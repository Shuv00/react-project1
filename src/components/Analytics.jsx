import React from 'react'
import laptop from '../assets/laptop.jpg'

export default function Analytics() {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-screen-lg mx-auto grid md:grid-cols-2'>
            <img src={laptop} alt="" srcset="" className='w-[500px] mx-auto my-4' width={200} />
        
        <div className='w-full flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='text-xl md:text-3xl sm:text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cumullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
            </p>
            <button className='bg-black rounded-lg py-2 my-6 mx-auto md:mx-0 w-[200px] text-[#00df9a]'> Get Started </button>

        </div>
        </div>
    </div>
  )
}
