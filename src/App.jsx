import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home'
import About from './pages/About'
import Trackr from './pages/Trackr'
import Geosaur from './pages/Geosaur'
import Kemukupu from './pages/Kemukupu'
import './App.css'

function App() {

  return (
    <div className="snap-y snap-mandatory h-screen overflow-x-hidden">
      <div className="snap-start">
        <Home/>
      </div>
      <div className="snap-start">
        <About/>
      </div>
      <div className="snap-start flex flex-row">
        <div>
          <Trackr/>
        </div>
        <div>
          <Geosaur/>
        </div>
        <div>
          <Kemukupu/>
        </div>
      </div>
    </div>
  )
}

export default App
