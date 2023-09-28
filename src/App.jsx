import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <div>

      <Nav/>
      <Home/>
      <Footer/>

    </div>
    
  )
}

export default App
