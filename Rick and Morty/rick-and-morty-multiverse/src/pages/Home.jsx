import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import './Home.css'
const Home = () => {
  const [pages, setPages] = useState(1)
  const url = `https://rickandmortyapi.com/api/character/?page=${pages}`;
  const { data: characters, loading, error } = useFetch(url);

  const changePages= (e)=>{
    console.log(e.target.value)
    if(e.target.value === "proximo"){

      setPages((prevPage)=>{
      return prevPage + 1
    })

    }
    if(e.target.value === "anterior"){

      setPages((prevPage)=>{
        
        if(prevPage >= 1){
          return prevPage - 1
        }else{
          return prevPage
        }
      
    })

    }
  
    
  }

  return <div>
      
    <ul>
      {characters &&
      characters.map((character)=>(
        <li key={character.id}>
          <div className="character-image">
            <img src={character.image} alt={`foto do personagem ${character.name}`} />
          </div>
          <div>
            <p>{character.name}</p>
          </div>
          </li>
      ))
      }
    </ul>
  <div>
      <button onClick={changePages} value={'anterior'}>Anterior</button>
      <p>{pages}</p>
      <button onClick={changePages} value={'proximo'}>Próximo</button>
    </div>
  </div>;
};

export default Home;
