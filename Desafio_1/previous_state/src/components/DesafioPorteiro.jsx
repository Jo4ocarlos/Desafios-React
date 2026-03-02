import { useState } from "react";
// desafio consiste em adionar pessoas ao inicio da fila sem duplicidade, tamanho maximo de 5 pessoas
const DesafioPorteiro = () => {
    const nomes = ["paulo", "joão", "fernanda", "lourrana"]

    const [fila, setFila] = useState([
        { id: 1, nome: "Jéssica" },
        { id: 20, nome: "Bruno" }
    ]);

    const entrarNaFila = () => {
      
        if(fila.length >= 5){
            alert("lista cheia, volte amanhã!!!")
            return
        }

        const randomNumber = Math.floor(Math.random() * nomes.length);

        

        const novaPessoa = {id:Math.floor(Math.random() *50), nome:nomes[randomNumber]}

        const estaNalista = fila.some((pessoa)=>{
            return  pessoa.nome === novaPessoa.nome
        })
        console.log(novaPessoa)

        if(estaNalista){
            alert(`tente novamente`)
         return
        } // validação que barra possiveis duplicidades de NOMES

        setFila((prevFila)=>{
            return [novaPessoa, ...prevFila] // para adicionar uma pessoa ao inicio de um array de objetos basta inverter a ordem do spread operator
            //de novo o uso do Previous state para sempre pegar o momento atual da lista e adcionar novas pessoas
        })
        
    }

    return (
        <div>
            <h3>Fila da Balada ({fila.length}/5)</h3>
            <button onClick={entrarNaFila}>Entrar VIP</button>
            <ul>
                {fila.map(pessoa => <li key={pessoa.id}>{pessoa.nome}</li>)}
            </ul>
        </div>
    )
}
export default DesafioPorteiro;