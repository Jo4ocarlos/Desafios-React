import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Home.css";
const Home = () => {
  const [pages, setPages] = useState(1);
  const url = `https://rickandmortyapi.com/api/character/?page=${pages}`;
  const { data: characters, loading, error } = useFetch(url);

  const changePages = (e) => {
    if (e.target.value === "proximo") {
      setPages((prevPage) => {
        return prevPage + 1;
      });
    }
    if (e.target.value === "anterior" && pages > 1) {
      setPages((prevPage) => {
          return prevPage - 1;
        
      });
    }
   
  };

  return (
    <div>
      {loading && <p>carregando...</p>}
        {error && <p>{error}</p>}
      <ul className="character-area">
        
        {characters &&
          characters.map((character) => (
            <li key={character.id} className="character-card">
              <div>
                <p>{character.name}</p>
              </div>
              <div className="character-image">
                <img
                  src={character.image}
                  alt={`foto do personagem ${character.name}`}
                />
              </div>
              <ul className="character-details">
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                <li>Status: {character.status}</li>
                <li>Origin: {character.origin["name"]}</li>
              </ul>
            </li>
          ))}
      </ul>
      <div>
        <button
          onClick={changePages}
          value={"anterior"}
          disabled={pages === 1 || loading}
        >
          Anterior
        </button>
        <p>{pages}</p>
        <button onClick={changePages} value={"proximo"}>
          Próximo
        </button>
      </div>
    </div>
  );
};

export default Home;
