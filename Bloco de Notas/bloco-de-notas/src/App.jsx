import { useState } from 'react'
import './App.css'
import BlocoDeNotas from './components/BlocoDeNotas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BlocoDeNotas/>
    </>
  )
}

export default App
