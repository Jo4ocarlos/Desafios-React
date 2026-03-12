import "./ProdutoCard.css"
const ProdutoCard = ({nome, preco, estoque})=>{

    return(
        <div>
            <div className="card_produtos">
            <h3>{nome}</h3>
            <span>
                <p className= {estoque > 0 ? "": "red_text"}>{estoque > 0 ? `R$ ${preco}`: "PRODUTO ESGOTADO" }
                </p>
            {estoque >0? <button>Comprar</button> : ""}
            </span>
            </div>
            
        </div>
    )
}

export default ProdutoCard;