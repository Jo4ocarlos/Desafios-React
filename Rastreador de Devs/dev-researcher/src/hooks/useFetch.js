import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchData = async () => {

    try {
    setLoading(true)
    const response = await fetch(url);

    if (response.status === 404) {
      throw new Error('404_NOT_FOUND');
    }
    const data = await response.json();

    setUser(data);
    console.log(data)
    setLoading(false)
    } catch (error) {
      console.log(error)
       if (error.message === '404_NOT_FOUND'){
        setError('Ooops! Não conseguimos encontrar nenhum usuário com esse nome :( Tente outro nome')

        setLoading(false)
      }else{
        setError('Ops deu um erro na sua busca... tente novamente em alguns minutos')
      }
      
    }

    
  };

  return { user, fetchData, loading, error };
};
