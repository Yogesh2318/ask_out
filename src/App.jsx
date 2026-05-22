import { useState } from 'react'
import Home from './pages/home'
import Final from './pages/final'
import {Route, Routes} from 'react-router-dom'
import ParticlesBackground from './pages/ParticlesBackground'
function App() {
 

  return (
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/final' element={<Final />} />
       <Route path='/particles' element={<ParticlesBackground />} />
    </Routes>
 
  )
}

export default App
