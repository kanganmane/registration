import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Home from './pages/Home'
const App = () => {
  const [isLoggedIn,setLoggedIn] = useState(false);
  return (
    <div className='w-screen h-screen flex flex-col font-mono text-white'>
      <Navbar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path='/signup' element={<Signup isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
