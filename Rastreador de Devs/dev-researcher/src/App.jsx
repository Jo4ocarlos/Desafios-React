//components
import Reasearcher from "./components/Researcher";

//hooks
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";

//styles
import "./App.css";

function App() {
  const [userSearched, setUserSearched] = useState("");
  const url = `https://api.github.com/users/${userSearched}`;
  const { user, fetchData, loading, error } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <section className="research">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setUserSearched(e.target.value)}
            placeholder="Digite o nome do usuário"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Buscando..." : "Buscar"}
          </button>
          {/* previnir que o cliente com uma internet mais lenta não fique clicando varias vezes e gerar varias requisições ou erros */}
        </form>

        <Reasearcher user={user} loading={loading} error={error} />
      </section>
    </>
  );
}

export default App;
