import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState();
  const [error, setRrror] = useState();
  const [data, setData] = useState();

  useEffect(() => {

    const fetchData = async ()=>{
        try {
            const res = await fetch(url)
       
            const json = await res.json()
            setData(json.results)

        } catch (error) {
            
        }
        
    }

    fetchData()
  }, [url]);
  return{data, loading, error}
};
