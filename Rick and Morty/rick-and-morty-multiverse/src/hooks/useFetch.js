import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
     
      setLoading(true);
      setData(null)
      setError(null)

      try {
        const res = await fetch(url);
        // Tratamento de erro HTTP (ex: 404)
        if (!res.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }
        const json = await res.json();
        setData(json.results);

      } catch (error) {
        setError(`Ops, deu um erro na busca: ${error.message}`);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};
