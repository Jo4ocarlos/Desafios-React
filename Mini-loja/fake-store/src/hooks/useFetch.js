import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setData(null);
      setError(null);

      try {
        const response = await fetch(url);
        const json = await response.json();
        //tratamento de erro
        if(!response.ok){
          throw new Error(`Erro HTTP: ${response.status}`)
        }
        setData(json);
      } catch (error) {
        setError(`Ops, deu um erro na busca: ${error.message}`)
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
