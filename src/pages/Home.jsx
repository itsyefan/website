import React from 'react';
import background from '../assets/bg.jpg';
import linkedin from '../assets/linkedin.svg';
import leetcode from '../assets/leetcode.svg';
import github from '../assets/github.svg';
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div className='h-screen overflow-hidden relative flex justify-center items-center'>
        <img src={background} className='scale-125 -mt-48 absolute'/>
        <div className='absolute flex-col mt-36'>
          <div className='flex-col'>
              <h1 className='text-white text-8xl font-bold text-center'>HELLO!</h1>
              <h1 className='text-white text-2xl font-normal text-center'>My name is Ethan and this is my portfolio. <br></br>Feel free to look around!</h1>
          </div>
          <div className='flex flex-row mt-16 justify-evenly'>
            <a href="https://www.linkedin.com/in/ethanyip/" target="_blank" rel="noopener"><img src={linkedin} className='w-20 transition duration-200 hover:scale-110 '/></a>
            <a href="https://github.com/itsyefan" target="_blank" rel="noopener"><img src={github} className='w-20 transition duration-200 hover:scale-110'/></a>
            <a href="https://leetcode.com/itsyefan/" target="_blank" rel="noopener"><img src={leetcode} className='w-20 transition duration-200 hover:scale-110'/></a>
          </div>
        </div> 
    </div>
 )
}
