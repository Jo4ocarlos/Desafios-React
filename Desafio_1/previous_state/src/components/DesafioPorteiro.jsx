import { useState } from "react";

const DesafioPorteiro = () => {
    const nomes = ["paulo", "joão", "fernanda", "lourrana"]
    const [fila, setFila] = useState([
        { id: 1, nome: "Jéssica" },
        { id: 20, nome: "Bruno" }
    ]);

    const entrarNaFila = () => {
        // 1. Gere um nome aleatório ou fixo
        // 2. Verifique se a fila já tem 5 pessoas. Se tiver, return.
        // 3. Crie o objeto novoPessoa
        // 4. Adicione ele NO COMEÇO do array usando setFila
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
        }

        setFila((prevFila)=>{
            return [novaPessoa, ...prevFila]
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