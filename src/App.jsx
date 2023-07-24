import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home'
import About from './pages/About'
import Trackr from './pages/Trackr'
import Geosaur from './pages/Geosaur'
import Kemukupu from './pages/Kemukupu'
import './App.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function App() {

  return (
    <div className="snap-y snap-mandatory h-screen overflow-x-hidden">
      <div className="snap-start">
        <Home/>
      </div>
      <div className="snap-start">
        <About/>
      </div>
      <div className="snap-start">
      <Carousel emulateTouch={true} autoPlay={true} interval={5000} infiniteLoop={true} showArrows={false} showStatus={false}>
          <Trackr/>
          <Geosaur/>
          <Kemukupu/>
      </Carousel>
      </div>
    </div>
  )
}

export default App
