import React from "react";
import { useEffect, useState } from "react";

const Cronometro = ({ tempoRestante, setTempoRestante }) => {

  const minutes = Math.floor(tempoRestante / 60);
  const seconds = tempoRestante % 60

  const [timeController, setTimeController] = useState(false);

  useEffect(() => {
    if (timeController) {
      const timer = setInterval(() => {
        setTempoRestante((time) => {
          if(time <=0){
            
            clearInterval(timer)
            setTimeController(false)
            zerarCronometro()
          }
          return time - 1;
        });
      }, 1000);

     
      return () => {
        clearInterval(timer);
      };
    }
  }, [timeController]);


  const startOrStopTimer = () => {
    setTimeController((controller)=>{
      return !controller
    });
  };


  const zerarCronometro = () => {
    setTempoRestante(1500);
    
  };

  return (
    <div>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      <button onClick={startOrStopTimer}>{timeController ? 'pausar' : 'iniciar'}</button>
  
      <button onClick={zerarCronometro}>zerar</button>
    </div>
  );
};

export default Cronometro;
