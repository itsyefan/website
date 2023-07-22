import React from 'react'
import AboutContent from './components/AboutContent'
import SkillsContent from './components/SkillsContent'

export default function About() {
  return (
    <div className='h-screen flex flex-row'>
        <AboutContent/>
        <SkillsContent/>
    </div>
  )
}
