import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Regist from './pages/Regist/Regist'
import Shop from './pages/Shop/Shop'
import Support from './pages/Support/Support'
import Akkount from './pages/Akkount/Akkount'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Shop />
      <Support />
      <Regist />
      <Akkount/>
      <Footer />  
    </>
  )
}

export default App
