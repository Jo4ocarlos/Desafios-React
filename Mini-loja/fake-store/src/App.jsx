//hooks
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
//pages
import Home from './pages/Home'
import About from './pages/About'

//componentes
import NavBar from './components/NavBar'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
