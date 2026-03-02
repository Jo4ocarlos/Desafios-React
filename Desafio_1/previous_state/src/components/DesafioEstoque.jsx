import { useState } from "react";

// desafio consiste em remover produtos vencidos da lista
const DesafioEstoque = () => {
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Leite", validade: false }, 
        { id: 2, nome: "Carne", validade: true },  
        { id: 3, nome: "Pão", validade: false },   
        { id: 4, nome: "Ovos", validade: true }    
    ]);

    const limparEstoque = () => {
        
        setProdutos((prevProdutos) =>{
            return prevProdutos.filter(produto => produto.validade == true) //utilizei o metodo filter() para devolver uma lista nova sem os produtos vencidos
            
            /*
            Adicionar itens (...prev) *spread operator*

            Remover itens (.filter)

            Editar itens (.map)
             */
        })
    }

    return (
        <div>
            <h3>Estoque da Cozinha</h3>
            <button onClick={limparEstoque}>Jogar fora vencidos</button>
            <ul>
                {produtos.map(item => (
                    <li key={item.id} style={{ color: item.validade ? 'white' : 'red' }}>
                        {item.nome} {item.validade ? "(Bom)" : "(Vencido!)"}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default DesafioEstoque;