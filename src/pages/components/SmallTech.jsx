import React from 'react'

export default function SmallTech(props) {
  return (
    <div className='flex flex-col text-center'>
        <img src={props?.image} className='h-20'/>
        <p className='text-2xl pt-2'>{props.name}</p>

    </div>
  )
}
