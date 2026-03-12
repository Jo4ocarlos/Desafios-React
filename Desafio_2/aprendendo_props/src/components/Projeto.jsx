import "./Projeto.css"
const Projeto = ({titulo, concluido}) => {
  return (
    <div className= {concluido? "border_green" : "border_red"}>
        <h4>{titulo}</h4>
        <p>{concluido ? "✅ Finalizado" : "⏳ Em andamento"}</p>
    </div>
  )
}

export default Projeto;