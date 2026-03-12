import './PainelChamadas.css'
const PainelChamadas= ({assunto, prioridade, status})=>{

    return(
        <div>
            <div className = {prioridade === 'alta' ? "prioridade_alta" : "prioridade_baixa"}>
                {status === "resolvido" ? <del>{`✅ ${assunto}`}</del> : <p>⚠️ {assunto}</p> }
            </div>
        </div>
    )
}

export default PainelChamadas;