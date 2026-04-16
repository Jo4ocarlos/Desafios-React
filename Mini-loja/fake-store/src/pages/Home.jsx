import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

//css
import "./Home.css";

const Home = () => {
  const url = "https://fakestoreapi.com/products";

  const { data: products, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <p>Carregando seus dados...</p>}
      {error && <p>{error}</p>}
      <ul className="products-area">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}/info`}>
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={`imagem do produto ${product.title}`}
                  />
                </div>
                <p>{product.title}</p>
                <div className="price-info">
                  <p>A partir de: $ {product.price}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
