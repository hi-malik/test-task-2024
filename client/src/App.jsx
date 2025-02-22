import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './home/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
