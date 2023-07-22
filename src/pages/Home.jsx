import React from 'react';
import background from '../assets/bg.jpg';
import linkedin from '../assets/linkedin.svg';
import leetcode from '../assets/leetcode.svg';
import github from '../assets/github.svg';

export default function Home() {
  return (
    <div className='h-screen overflow-hidden relative flex justify-center items-center'>
        <img src={background} className='scale-125 -mt-48 absolute'/>
        <div className='absolute flex-col mt-52'>
          <div className='flex-col'>
              <h1 className='text-white text-8xl font-bold text-center'>HELLO!</h1>
              <h1 className='text-white text-2xl font-normal text-center'>My name is Ethan and this is my portfolio. <br></br>Feel free to look around!</h1>
          </div>
          <div className='text-white w-full text-2xl font-normal text-center flex flex-row w-1/6 justify-around mt-16'>
            <h1>About</h1>
            <h1>Projects</h1>
          </div>
          <div className='flex flex-row mt-16 justify-evenly'>
            <img src={linkedin} className='w-20'/>
            <img src={github} className='w-20'/>
            <img src={leetcode} className='w-20'/>
          </div>
        </div>
        
        
    </div>
 )
}
