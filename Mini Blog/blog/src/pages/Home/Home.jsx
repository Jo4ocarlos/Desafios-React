//css
import style from './Home.module.css'

//hooks
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useFetchDocuments} from '../../hooks/useFetchDocuments.js'
// components
import Posts from "../../components/Posts/Posts";

const Home = () => {
const [query, setQuery] = useState('') //state da pesquisa de formulários
const {documents:posts, loading} = useFetchDocuments("posts")

console.log("DADOS QUE CHEGARAM NA HOME:", posts);

const handleSubmmit = (e)=>{
    e.preventDefault()
}
  return (
    <div className={style.home}>
      <form onSubmit={handleSubmmit} className={style.search_form}>
        <input type="text" placeholder="Pesquisar posts por tags..." onChange={(e)=> setQuery(e.target.value)} value={query}/>
        <button className="btn-search">🔍</button>
      </form>

      <Posts posts={posts}/>
    </div>
  );
};

export default Home;
