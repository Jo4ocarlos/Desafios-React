
const ListaClientes = ({clientes})=>{
    
    return(
        <div>
            <ul>
                {clientes.map((cliente)=>(
                <li key={cliente.id}>{cliente.nome} - {cliente.servico}</li>
            ))}
            </ul>
      
        </div>
    )
}

export default ListaClientes;