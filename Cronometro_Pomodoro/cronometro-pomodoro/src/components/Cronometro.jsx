import React from 'react'

const Cronometro = ({tempoRestante}) => {
  const minutos = Math.floor(tempoRestante / 60)
  const segundos = 60
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