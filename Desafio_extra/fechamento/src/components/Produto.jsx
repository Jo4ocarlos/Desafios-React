

function Produto({name, preco, size, comprar}) {
  return (
    <div>
        <div className="product_card">
            <span>
                <h4>{name}</h4>
                <p> tamanho {size}</p>
            </span>
            <p>R$ {preco},00</p>
            <button onClick={()=> comprar(preco)}>Comprar</button>
        </div>
    </div>
  )
}

export default Produto