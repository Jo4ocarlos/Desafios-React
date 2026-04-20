import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Home.css";
import CharacterCard from "../components/CharacterCard";
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
    <div className="home-container">
      {loading && <p>carregando...</p>}
      {error && <p>{error}</p>}

      <CharacterCard characters={characters}/> {/* componentizei o card de personsagem para ficar fácil de reutilizar e não precisar ficar copiando e colando */}
          
      <div className="pagination">
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
