import { useState } from "react";

//resoulução do desafio que consiste em sortear uma pessoa de dentro da lista e adicionala a equipe, com um id proprio
const DesafioUm = () => {
    const nomesPossiveis = ["Ana", "Carlos", "João", "Maria"];

    const [equipe, setEquipe] = useState([
        { id: 1, nome: "Lucas" } 
    ]);

   
    const sortearMembro = ()=>{
        // sorteia um número aleatório baseado no tamanho da lista
        const indiceSorteado = Math.floor(Math.random() * nomesPossiveis.length);
        console.log(indiceSorteado)

        const membroSorteado = nomesPossiveis[indiceSorteado]
        // o membro sorteado é uma das pessoas da lista(nomesPossiveis), na posição aleatoria definida pelo indice sorteado
        
        return membroSorteado;


    }

    const recrutarAleatorio = () => {
//verificamos se todos já estão na lista
        if (equipe.length >= nomesPossiveis.length + 1) {
            alert("A equipe está completa!"); //esse +1 é porque já havia uma pessoa previamente na lista
            return;
        }
        const membroSorteado = sortearMembro(); //sorteamos um membro e atribuimos a uma variável

       const jaExiste = equipe.some((membro)=>{
           return membro.nome == membroSorteado
        })
//validação se o membro já existe dentro da equipe
        if(jaExiste){
            alert(`Opa! ${membroSorteado} já está na equipe. Tente de novo!`);
            return 
        }
        

        const NovoMembro = {id: Math.random(), nome:membroSorteado};
 console.log(NovoMembro)

        setEquipe((prevEquipe)=>{
         return [...prevEquipe, NovoMembro];
        })
        // adicionamos um novo membro  a equipe com spread operator
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