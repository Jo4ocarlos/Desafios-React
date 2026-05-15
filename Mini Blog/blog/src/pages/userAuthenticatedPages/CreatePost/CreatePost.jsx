import styles from "./CreatePost.module.css";

//hooks
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useAuthValue } from "../../../context/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [content, setContent] = useState("");
  const [hashTags, setHashTags] = useState([""]);
  const [formError, setFormError] = useState('')

  const handleTags = (e)=>{
    //convertemos o que vem do input como string para array, a cada virgula que o usuario digitar vira um componente do array
    const stringToArray = e.target.value.split(',').map(tags => tags.trim()).filter(Boolean)
    //tive que adicionar esse metodo filter(Boolean) porque quando adicionava a virgula criava uma tag vazia, apenas com espaço
    setHashTags(stringToArray);
  }
  console.log(hashTags)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      urlImg,
      content,
      hashTags,
    }

    console.log(newPost)
  };
  return (
    <div className={styles.create_post_page}>
      <h1>Crie sua postagem!</h1>
      <p>Escreva sobre o que quiser e compartilhe suas ideias</p>
      <form onSubmit={handleSubmit}>
        
        <label>
          <span>Título do post</span>
          <input
            type="text"
            name="title"
            placeholder="pense em um bom título"
          onChange={(e)=> setTitle(e.target.value)} required/>
        </label>

        <label>
          <span>URL da imagem</span>
          <input
            type="url"
            name="urlImg"
            id=""
            placeholder="insira uma imagem que represente seu post"
          onChange={(e)=> setUrlImg(e.target.value)} required/>
        </label>

        <label>
          <span>Conteúdo</span>
          <textarea name="content" required onChange={(e)=> setContent(e.target.value) } placeholder="No que você está pensando?" value={content}></textarea>
        </label>
        
        <label>
          <span>HashTags:</span>
          <input
            type="text"
            name=""
            id=""
            placeholder="insira hashtags separadas por vírgulas"
            onChange={handleTags}
            required
          />
        </label>
        <button className="btn">Criar post!</button>
      </form>
    </div>
  );
};

export default CreatePost;