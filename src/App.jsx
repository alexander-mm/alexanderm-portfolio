import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Jobs from './components/Jobs'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <WelcomeSection/>
      <Aboutme/>
      <Skills/>
      <Jobs/>
      <Footer/>
    </div>
  )
}

export default App
