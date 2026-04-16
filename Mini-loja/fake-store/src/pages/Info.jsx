import { useParams, Link, Navigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const Info = () => {
  const { id } = useParams();

  const url = `https://fakestoreapi.com/products/${id}`;

  const { data: product } = useFetch(url);

  return (
    <div>
        <Link to={'/'}>Voltar</Link>
        {product && 
        <div>
            <span> <img src={product.image} alt={`imagem do produto ${product.title}`} /></span>
            <div>
                <p>{product.title}</p>
                <p> Descrição: <br/>{product.description}</p>
                <p>avaliação dos clientes: {product.rating["rate"]}</p>
            </div>
        </div>
        }
    </div>
  );
};

export default Info;
