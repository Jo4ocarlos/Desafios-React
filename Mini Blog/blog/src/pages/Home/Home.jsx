//css
import style from './home.module.css'

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// components
import Posts from "../../components/Posts/Posts";

const Home = () => {
const [query, setQuery] = useState('') //state da pesquisa de formulários
const [posts] = useState([])
const handleSubmmit = (e)=>{
    e.preventDefault()
}
  return (
    <div className={style.home}>
        <h1>Veja nossos posts Mais recentes</h1>
      <form onSubmit={handleSubmmit} className={style.search_form}>
        <input type="text" placeholder="Ou busque por tags.." onChange={(e)=> setQuery(e.target.value)} value={query}/>
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <Posts posts={posts}/>
    </div>
  );
};

export default Home;
