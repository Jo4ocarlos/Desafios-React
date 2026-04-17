import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import './Info.css'; // Não esqueça de importar o CSS!

const Info = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const { data: product } = useFetch(url);

  return (
    <div className="info-container">
        <Link to={'/'} className="btn-back">← Voltar</Link>
        
        {product && 
        <div className="product-details">
            <div className="product-image-large"> 
              <img src={product.image} alt={`imagem do produto ${product.title}`} />
            </div>
            
            <div className="product-text">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-desc"> 
                  <strong>Descrição:</strong> <br/>
                  {product.description}
                </p>
                <span className="product-rating">
                  <p>Avaliação dos clientes: ⭐ {product.rating["rate"]}</p>
                </span>
                
            </div>
        </div>
        }
    </div>
  );
};

export default Info;