import { useState } from "react";

import "./App.css";
import Produto from "./components/Produto";

function App() {
  const [totalConta, setTotalConta] = useState(0);

  const productsList = [
    { id: 1, name: "Tênis", preco: 200, size: "P" },
    { id: 2, name: "Camisets", preco: 60, size: "GG" },
    { id: 3, name: "Moletom", preco: 250, size: "M" },
    { id: 4, name: "Calça", preco: 90, size: 38 },
    { id: 5, name: "Meia", preco: 20, size: "PP" },
  ];

  const SomarNaConta = (value) => {
    setTotalConta((prevTotalConta) => {
      return prevTotalConta + value;
    });
  };

  return (
    <>
      <h1>Total da Conta: R$ {totalConta},00</h1>

      <button onClick={() => SomarNaConta(10)}> clicar</button>
      {productsList.map((product) => (

        <Produto key={product.id}
        {...product}
        comprar = {SomarNaConta} 
        />
      ))}
    </>
  );
}

export default App;
