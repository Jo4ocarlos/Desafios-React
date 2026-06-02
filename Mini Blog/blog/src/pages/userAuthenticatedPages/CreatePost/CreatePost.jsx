import styles from "./CreatePost.module.css";

//hooks
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useAuthValue } from "../../../context/AuthContext";
import { useInsertDocument } from "../../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [content, setContent] = useState("");
  const [hashTags, setHashTags] = useState([""]);
  const [textTags, setTextTags] = useState('')
  const [formError, setFormError] = useState('')

  const {insertDocument, response} = useInsertDocument('posts')
  const {user} = useAuthValue()

  const navigate = useNavigate()

  const handleTags = (e)=>{
   //Auto-formatar espaço para vírgula
    // Pega o valor atual e troca espaços por vírgulas de forma inteligente
    let textoFormatado = e.target.value.replace(/([^,\s])\s+/g, '$1, ');

    // 2. Atualiza a tela (o input visual) já com a vírgula nova
    setTextTags(textoFormatado);
    //convertemos o que vem do input como string para array, a cada virgula que o usuario digitar vira um componente do array
    const stringToArray = e.target.value.split(/[,\s]+/).map(tags => tags.trim()).filter(Boolean)
    //tive que adicionar esse metodo filter(Boolean) porque quando adicionava a virgula criava uma tag vazia, apenas com espaço
    setHashTags(stringToArray);
  }
  console.log(hashTags)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('')

    try{
      new URL(urlImg)
    } catch (error){
      setFormError("Precisamos de uma url valida")
      return
    }

    if(!title || !urlImg || !hashTags  || !content){
      setFormError("Por favor, preencha todos os campos!")
      return
    }


    const newPost = {
      title,
      urlImg,
      content,
      hashTags,
      uid: user.uid,
      createdBy: user.displayName
    }

    insertDocument(newPost)

    console.log(newPost)
      navigate("/"); 
    
  };

  useEffect(()=>{
    setFormError(response.error)
  },[response])
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
          onChange={(e)=> setTitle(e.target.value)} required value={title}/>
        </label>

        <label>
          <span>URL da imagem</span>
          <input
            type="url"
            name="urlImg"
            id=""
            placeholder="insira uma imagem que represente seu post"
          onChange={(e)=> setUrlImg(e.target.value)} required value={urlImg}/>
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
            required value={textTags}
          />
        </label>
        {response.loading && <button className="btn" disabled>Criando sua postagem...</button>}
        {!response.loading && <button className="btn">Criar post!</button>}
      </form>
      {formError && <p className="error">{formError}</p>}
    </div>
  );
};

export default CreatePost;