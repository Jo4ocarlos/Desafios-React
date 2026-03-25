
import { useState } from 'react'
import './App.css'
import Cronometro from './components/Cronometro'
function App() {
const [tempoRestante, setTempoRestante] = useState(10)

  return (
    <>
    <Cronometro tempoRestante={tempoRestante} setTempoRestante ={setTempoRestante}/>
    </>
  )
}

export default App
