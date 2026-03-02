import { useState } from "react";

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