import styles from "./EditPost.module.css";

//hooks
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useInsertDocument } from "../../../hooks/useInsertDocument";
import { useFetchDoc } from "../../../hooks/useFetchDoc";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDoc("posts", id);
  const { user } = useAuthValue();

  const [title, setTitle] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [content, setContent] = useState("");
  const [hashTags, setHashTags] = useState([]);

  const [tagsText, setTagsText] = useState(""); //Esse estado cuida única e exclusivamente do que o usuário está vendo e digitando no input
  const [formError, setFormError] = useState("");

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setUrlImg(post.urlImg);
      setContent(post.content);
      // Preenche o texto visual do input para edição
      setTagsText(post.hashTags.join(", "));
      // Preenche a array real para o preview carregar de imediato
      setHashTags(post.hashTags);
    }
  }, [post]);

  const handleTags = (e) => {
    setTagsText(e.target.value); // esse é oque aparece no input, o value do input hastags

    // esse aqui é o que vai para o servidor e e ja atualizamos o estado com "setHashTags(stringToArray);" para que o usuario já tenha um retorno no preview
    const stringToArray = e.target.value
      .split(/[,\s]+/) // [,\s]+ significa: corte por vírgula (,) OU espaço (\s), uma ou mais vezes (preciso entender mais o regex)
      .map((tag) => tag.trim())
      .filter(Boolean);
    setHashTags(stringToArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(urlImg);
    } catch (error) {
      setFormError("Precisamos de uma url valida");
      return;
    }

    if (!title || !urlImg || !hashTags || !content) {
      setFormError("Por favor, preencha todos os campos!");
      return;
    }

    const newPost = {
      title,
      urlImg,
      content,
      hashTags,
      uid: user.uid,
      createdBy: user.displayName,
    };

    insertDocument(newPost);

    console.log(newPost);
    navigate("/");
  };

  useEffect(() => {
    setFormError(response.error);
  }, [response]);

  return (
    <div className={styles.edit_post_page}>
      {post && (
        <>
          <div className={styles.header_title}>
            <h1>Edite sua postagem!</h1>
            <p>
              Você está editando: <strong>{post.title}</strong>
            </p>
          </div>

          <div className={styles.content_split}>
            {/* LADO ESQUERDO: FORMULÁRIO */}
            <div className={styles.form_section}>
              <form onSubmit={handleSubmit}>
                <label>
                  <span>Título do post</span>
                  <input
                    type="text"
                    name="title"
                    placeholder="Pense em um bom título"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    value={title}
                  />
                </label>

                <label>
                  <span>URL da imagem</span>
                  <input
                    type="url"
                    name="urlImg"
                    id=""
                    placeholder="Insira uma imagem que represente seu post"
                    onChange={(e) => setUrlImg(e.target.value)}
                    required
                    value={urlImg}
                    disabled
                  />
                </label>

                <label>
                  <span>Conteúdo</span>
                  <textarea
                    name="content"
                    required
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="No que você está pensando?"
                    value={content}
                  ></textarea>
                </label>

                <label>
                  <span>HashTags:</span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Insira hashtags separadas por vírgulas"
                    onChange={handleTags}
                    required
                    value={
                      tagsText
                    } /* o estado de visualização tive que criar uma separação do que é enviado para o que o usuario esta vendo */
                  />
                </label>
                {response.loading && (
                  <button className="btn" disabled>
                    Salvando sua postagem...
                  </button>
                )}
                {!response.loading && (
                  <button className="btn">Salvar edição</button>
                )}
              </form>
              {formError && <p className="error">{formError}</p>}
            </div>

            {/* LADO DIREITO: PREVIEW MINIMALISTA */}
            <div className={styles.preview_section}>
              <div className={styles.preview_card}>
                <div className={styles.preview_header}>
                  <img
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${user.displayName || "Usuario"}&background=random`
                    }
                    alt="Foto de perfil"
                  />
                  <h2>{user.displayName}</h2>
                </div>

                <div className={styles.preview_body}>
                  <h1>{title || "O título aparecerá aqui"}</h1>
                  <p>
                    {content ||
                      "Comece a digitar o conteúdo para ver a mágica..."}
                  </p>

                  {urlImg && (
                    <img
                      src={urlImg}
                      alt="Preview do post"
                      className={styles.preview_img}
                    />
                  )}

                  {/* Preview de tags  */}
                  {hashTags && hashTags.length > 0 && (
                    <div className={styles.preview_tags}>
                      {hashTags.map((tag, index) => (
                        <span key={index} className={styles.tag_badge}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditPost;
