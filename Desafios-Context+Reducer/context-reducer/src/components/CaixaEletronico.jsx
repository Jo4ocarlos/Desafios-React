import { useState } from "react";
import { useBankContext } from "../hooks/useBankContext";

const CaixaEletronico = () => {
  const [credito, setCredito] = useState(0);
  const { saldo, dispatch } = useBankContext();

  const depositarSaldo = (value) => {
    
    dispatch({ type: "DEPOSITAR", dados:value});
    setCredito('')
  };

  const sacarSaldo = (value) => {
    dispatch({ type: "SACAR", dados:value});
    setCredito('')
  };

  return (
    <div>
      <h3>Seu saldo: {saldo}</h3>

      <input type="number" onChange={(e) => setCredito(e.target.value)} value={credito}/>

      <button onClick={() => depositarSaldo(credito)}>Depositar</button>
      <button onClick={() => sacarSaldo(credito)}>Sacar</button>
    </div>
  );
};

export default CaixaEletronico;
