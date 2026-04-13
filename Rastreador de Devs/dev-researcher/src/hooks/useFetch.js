import { useState } from "react";

export const useFetch = (url) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setUser(null);
    setError(null); //sempre limpar os erros e dados antigos antes de uma nova requisição
    setLoading(true);  

    try {
      const response = await fetch(url);

      if (response.status === 404) {
        throw new Error("404_NOT_FOUND");
      }
      const data = await response.json();

      setUser(data);

    } catch (error) {
      console.log(error);
      if (error.message === "404_NOT_FOUND") {
        setError(
          "Ooops! Não conseguimos encontrar nenhum usuário com esse nome :( Tente outro usuário",
        );
        
      } else {
        setError(
          "Ops deu um erro na sua busca... tente novamente em alguns minutos",
        );
      }
    }
    setLoading(false);
  };

  return { user, fetchData, loading, error };
};
