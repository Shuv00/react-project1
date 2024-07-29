import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import '../index.css'
export default function NavBar() {
    const [nav, setNav] = useState(false);
    const handlenav = () => {
        setNav(!nav);
    }
  return ( 
    <>
    <div className='text-white flex justify-center items-center h-24 mx-auto px-4 max-w-screen-lg'>
        <h1 className='w-full font-bold text-3xl text-[#00df9a]'>REACT.</h1>
        <ul className='md:flex hidden'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resource</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handlenav} className='block md:hidden'>
        {nav ? <IoClose size={30} /> :  <TiThMenu size={30} />}  
        </div>
        <div className={nav  ? 'p-4 fixed top-0 left-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] transition-all ease-in-out duration-500 tran' : 'fixed hidden right-0'}>
            <h1 className='m-4 w-full font-bold text-3xl text-[#00df9a]'>REACT.</h1>
            <ul className='pt-12 uppercase '>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resource</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div> 
    </>
  )
}
