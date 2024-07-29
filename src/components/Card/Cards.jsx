import React from 'react'
import Card from './Card'
import single from '../../assets/single.png'
import double from '../../assets/double.png'
import triple from '../../assets/triple.png'
export default function Cards() {
  return (
    <>
    <div className='w-full bg-white py-8'>
      <div className='flex flex-col sm:flex-row items-center justify-center max-w-screen-lg mx-auto gap-6'>
        <Card image={single} bgCol={"#00df9a"}  col={"black"}/>
        <Card image={double} bgCol={"black"} col={"#00df9a"} />
        <Card image={triple} bgCol={"#00df9a"}  col={"black"}/>
      </div>
    </div>
        
    </>
  )
}
