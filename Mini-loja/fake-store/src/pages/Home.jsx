import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
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
                            <p>$ {product.price}</p>
                            <Link to={`/product/${product.id}/info`}>Ver detalhes</Link>
                        </div>
    
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Home;