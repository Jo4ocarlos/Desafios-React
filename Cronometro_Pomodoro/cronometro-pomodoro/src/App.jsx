
import { useState } from 'react'
import './App.css'
import Cronometro from './components/Cronometro'
function App() {
const [tempoRestante, setTempoRestante] = useState(1500)

  return (
    <>
    <Cronometro tempoRestante={tempoRestante}/>
    </>
  )
}

export default App
