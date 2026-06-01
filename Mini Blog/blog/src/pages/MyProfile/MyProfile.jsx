import style from "./MyProfile.module.css";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const MyProfile = () => {
  const { user } = useAuthValue();
  const { documents: userPosts, loading } = useFetchDocuments(
    "posts",
    null,
    user.uid,
  );

  if (loading) return <p className={style.loading}>Carregando seus dados...</p>;

  /*: 
    Se userPosts for null ou undefined, nossa constante vira um array vazio [],
    impedindo que o React quebre ao tentar ler o .length lá embaixo!
  */
  const postsList = userPosts || [];

  return (
    <div className={style.profile_container}>
      {/* 1. CABEÇALHO DO PERFIL */}
      <div className={style.profile_header}>
        <img
          src={
            user.photoURL ||
            `https://ui-avatars.com/api/?name=${user.displayName || "Usuario"}&background=random`
          }
          alt={`Foto de perfil de ${user.displayName}`}
          className={style.profile_avatar}
        />
        <h1 className={style.profile_name}>
          {user.displayName || "Meu Perfil"}
        </h1>
        <p className={style.profile_bio}>Membro da Comunidade</p>
      </div>

      {/* 2. SESSÃO DE PUBLICAÇÕES */}
      <div className={style.posts_section}>
        <div className={style.section_title_wrapper}>
          <h2>Minhas Publicações</h2>
          {/* Usamos postsList com segurança aqui */}
          <span className={style.post_count}>{postsList.length} posts</span>
        </div>

        {/* Verificação se está vazio usando a constante segura */}
        {postsList.length === 0 ? (
          <div className={style.noposts}>
            <p>Você ainda não fez nenhuma publicação.</p>
            <Link to="/post/create" className={style.btn_create}>
              Criar meu primeiro post
            </Link>
          </div>
        ) : (
          <ul className={style.profile_feed}>
            {/* Mapeamos a postsList com segurança aqui também */}
            {postsList.map((post) => (
              <li key={post.id} className={style.profile_post_card}>
                <div className={style.card_header}>
                  <span className={style.post_date}>Postado recentemente</span>
                  <div className={style.card_actions}>
                    <Link>Editar</Link>
                  </div>
                </div>

                <div className={style.card_body}>
                  
                    {post.urlImg && (
                      <img
                        src={post.urlImg}
                        alt={`Imagem do post ${post.title}`}
                        className={style.post_thumbnail}
                      />
                    )}
                    <div className={style.card_infs}>
                    <div>
                      <h3>{post.title}</h3>
                      <p>
                        {post.content
                          ? post.content.substring(0, 120) + "..."
                          : ""}
                      </p>
                    </div>
                    <div>
                      <button className={style.icon_btn}>Excluir</button>
                    </div>

                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
