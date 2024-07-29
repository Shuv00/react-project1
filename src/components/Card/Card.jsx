import React from 'react'

export default function Card({image, bgCol, col}) {
  return (
    <>
    <div className='py-10 px-16 shadow-lg rounded-md hover:scale-110 duration-300 flex flex-col items-center'>
          <img src={image} alt="" width={40} />
          <h2 className='text-lg font-bold mt-2'>Single User</h2>
          <p className='text-md font-bold'>$194</p>
          <p></p>
          <div className='text-center w-full font-medium'>
                  <p className='py-2 border-b  mt-4'>500 GB Storage</p>
                  <p className='py-2 border-b '>1 Granted User</p>
                  <p className='py-2 border-b '>Send up to 2 GB</p>
           </div>
           <button className='mt-4 rounded-md font-medium px-4 py-2' style={{backgroundColor: bgCol, color:col }}>
              Start Trial
           </button>

    </div>
    </>
  )
}
