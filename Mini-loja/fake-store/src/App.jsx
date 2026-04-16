import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <header>
      <div className='logo'>FakeStore</div>

      </header>

      <Routes>

        <Route/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
