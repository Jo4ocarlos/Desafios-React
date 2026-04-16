//hooks
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//pages
import Home from './pages/Home'
import About from './pages/About'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
//componentes
import NavBar from './components/NavBar'


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <header>
      <div className='logo'>FakeStore</div>

      </header>
      <NavBar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/product/:id/info' element={<Info/>}/>
        <Route path='/back' element={<Navigate to="/"/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
