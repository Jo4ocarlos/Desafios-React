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
            setData(json)

        } catch (error) {
            
        }
        
    }

    fetchData()
  });
  return{data, loading, error}
};
