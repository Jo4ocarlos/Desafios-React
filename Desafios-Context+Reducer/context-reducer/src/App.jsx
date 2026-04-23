import { useState } from 'react'

import './App.css'
import CaixaEletronico from './components/CaixaEletronico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <CaixaEletronico/>
    </>
  )
}

export default App
