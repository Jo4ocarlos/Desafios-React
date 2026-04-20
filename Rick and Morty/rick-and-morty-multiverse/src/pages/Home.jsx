import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

const Home = () => {
 
    const url = `https://rickandmortyapi.com/api/character/?page=1`
    const {data, loading, error} = useFetch(url)




  return (
    <div>
  
    </div>
  )
}

export default Home