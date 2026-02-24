import { useState } from "react";

const DesafioUm = () => {
    const nomesPossiveis = ["Ana", "Carlos", "João", "Maria"];

    const [equipe, setEquipe] = useState([
        { id: 1, nome: "Lucas" } // Lucas já começa na equipe
    ]);

    const sortearMembro = ()=>{
        const indiceSorteado = Math.floor(Math.random() * nomesPossiveis.length);
        console.log(indiceSorteado)

        const membroSorteado = nomesPossiveis[indiceSorteado]
        
        return membroSorteado;

     

    }

    const recrutarAleatorio = () => {
        // SUA LÓGICA ENTRA AQUI!
        // 1. Sortear um índice baseado no tamanho do array 'nomesPossiveis'
        // 2. Pegar o nome sorteado
        // 3. Montar o objeto { id: ..., nome: ... }
        // 4. Usar setEquipe com (prev) => ... para colocar ele no array

        if (equipe.length >= nomesPossiveis.length + 1) {
            alert("A equipe está completa!");
            return;
        }
        const membroSorteado = sortearMembro()

       const jaExiste = equipe.some((membro)=>{
           return membro.nome == membroSorteado
        })

        if(jaExiste){
            alert(`Opa! ${membroSorteado} já está na equipe. Tente de novo!`);
            return 
        }
        

        const NovoMembro = {id: Math.random(), nome:membroSorteado};
 console.log(NovoMembro)

        setEquipe((prevEquipe)=>{
         return [...prevEquipe, NovoMembro];
        })
    }


    return(
        <div>
            <h3>Minha Equipe</h3>
            <ul>
                {equipe.map(membro => <li key={membro.id}>{membro.nome}</li>)}
            </ul>
            <button onClick={recrutarAleatorio}>Recrutar Membro</button>
            
        </div>
    )
}

export default DesafioUm