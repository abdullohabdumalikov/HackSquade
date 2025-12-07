import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Regist from './pages/Regist/Regist'
import Shop from './pages/Shop/Shop'
import Support from './pages/Support/Support'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LayOut>
                <Home />
              </LayOut>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <LayOut>
                <About />
              </LayOut>
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <LayOut>
                <NotFound />
              </LayOut>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
