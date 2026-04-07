import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import ScrollCTA from './components/ScrollCTA'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <ScrollCTA />
    </>
  )
}

export default App
