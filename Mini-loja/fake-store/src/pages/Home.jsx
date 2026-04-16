import { useFetch } from "../hooks/useFetch";

const Home = ()=>{
    const url = "https://fakestoreapi.com/products"

    const {data: products} = useFetch(url)

    return(
        <div>
            <ul>
                {products &&
                products.map((product)=>(
                    <li key={product.id}>
                        <div>
                            <img src={product.image} alt={`imagem do produto ${product.title}`} />
                        </div>
                        <p>{product.title}</p>
                        <div>
                            <button>Comprar</button>
                            <p>{product.price}</p>
                        </div>
    
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Home;