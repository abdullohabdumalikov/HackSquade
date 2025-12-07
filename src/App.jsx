import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Regist from './pages/Regist/Regist'

import './App.css'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Header />
      <Footer />
      <Home />
      <About />
      <Regist />
    </>
  )
}

export default App
