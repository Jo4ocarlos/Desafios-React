import React from 'react'
import { useEffect, useState } from 'react'
const Cronometro = ({tempoRestante}) => {
  const minutos = Math.floor(tempoRestante / 60)
  const [segundos, setSegundos] = useState(60)
  


 
    
    const contagem = setInterval(()=>{
      
      setSegundos((prevSegundos)=>{
        if(prevSegundos > 0){
      return prevSegundos - 1
    }})

    }, 1000)
  


  return (
    <div>
      {minutos}:{segundos}
     
      <button>Iniciar</button>
      <button>Pausar</button>
      <button>zerar</button>
    </div>
  )
}

export default Cronometro