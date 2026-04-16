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

        setData(json);
      } catch (error) {

      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
