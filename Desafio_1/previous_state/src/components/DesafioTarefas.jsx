import { useState } from "react";
//Desafio consiste em atualizar o estado de uma tarefa para concluido ou não, de maneira que troque a cada clique, como um interruptor, liga/desliga
const DesafioTarefas = () => {
    const [tarefas, setTarefas] = useState([
        { id: 1, texto: "Estudar React", completada: false },
        { id: 2, texto: "Pagar boletos", completada: false }
    ]);

    const toggleTarefa = (idParaAlterar) => {

        setTarefas((prevTarefas) =>{

             return prevTarefas.map((tarefa)=>{
                
            if(tarefa.id === idParaAlterar){
            
                return {...tarefa, completada: !tarefa.completada} 
                // defini o valor da propriedade "completada" da lista tarefeas com o inverso dele mesmo utilizando o not/negação "!" 
                // com a utilização do Previou state sempre teremos a forma mais recente da lista, então se no primeiro clique era false e se tornou true, no segundo clique que é true se tornará false assim o "interruptor" funciona corretamente
                
            }else{
                return tarefa;
            }
            })
        })
    
    }

    return (
        <div>
            <h3>Minhas Tarefas</h3>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id} style={{ textDecoration: tarefa.completada ? 'line-through' : 'none' }}>
                        {tarefa.texto}
                        <button onClick={() => toggleTarefa(tarefa.id)}>
                            {tarefa.completada ? "Desfazer" : "Concluir"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default DesafioTarefas;