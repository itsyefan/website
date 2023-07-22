import React from 'react';
import Map from '../assets/Map.jpg'

export default function Trackr() {
  return (
    <div className='h-screen flex flex-row bg-blue text-white'>
      <div className='basis-7/12 flex flex-col justify-center items-center'>
        <div className='w-6/12 text-center'>
          <h1 className='text-9xl font-bold'>Trackr</h1>
          <p className='text-2xl font-normal p-4'>A mobile indoor tracking application to aid rest home caregivers in caring for their patients.</p>
          <p className='text-xl'>React Native, JavaScript, ExpressJS, NodeJS, MongoDB, C++, Arduino</p>
        </div>
      </div>
      <div className='flex flex-row basis-5/12 justify-center items-center'>
        <img src={Map} className='h-5/6'/>
      </div>
    </div>
  )
}
