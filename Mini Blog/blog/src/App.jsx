import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import './App.css'

function App() {

  return (
    <>
     <h1>MiniBLog</h1>
     <BrowserRouter>
     <Routes>
      <Route path='/' elemen={<Home/>}/>
      <Route path='/about' elemen={<About/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
