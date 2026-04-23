import { useState } from "react";
import { useBankContext } from "../hooks/useBankContext";

const CaixaEletronico = () => {
  const [credito, setCredito] = useState();
  const { saldo, dispach } = useBankContext();

  const depositarSaldo = (value) => {
    const newValue = Number(value + saldo);
    dispach({ type: "DEPOSITAR", dados: newValue });
  };
  const sacarSaldo = (value) => {
    const newValue = Number(value - saldo);
    dispach({ type: "SACAR", dados: newValue });
  };

  return (
    <div>
      <h3>Seu saldo: {saldo}</h3>
      <input type="number" onChange={(e) => setCredito(e.target.value)} />
      <button onClick={() => depositarSaldo(credito)}>Depositar</button>
      <button onClick={() => sacarSaldo(credito)}>Sacar</button>
    </div>
  );
};

export default CaixaEletronico;
