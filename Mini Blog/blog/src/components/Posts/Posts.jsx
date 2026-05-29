import React from "react";
import style from "./Posts.module.css";
import { Link } from "react-router-dom";
const Posts = ({ posts }) => {
  return (
    <div className={style.page_wrapper}>
      <ul className={style.feed_container}>
        {/* Bloco de "Nenhum post encontrado" */}
        {posts && posts.length === 0 && (
          <div className={style.noposts}>
            <p>Não foram encontrados posts.</p>
            <Link to="/post/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}

        {/* Renderização dos Posts */}
        {posts &&
          posts.map((post) => (
            <li key={post.id} className={style.post_card}>
              <div className={style.header_posts}>
                <img
                  src={
                    post.userAvatar ||
                    "https://ui-avatars.com/api/?name=" +
                      post.createdBy +
                      "&background=random"
                  }
                  alt={`foto do ${post.createdBy}`}
                />
                <h2>{post.createdBy}</h2>
              </div>

              <div className={style.body_posts}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>

                {post.urlImg && (
                  <img
                    src={post.urlImg}
                    alt={`imagem que ilustra o post com o titulo de ${post.title}`}
                  />
                )}

                {/* Container das Tags */}
                {post.hashTags.length !== 0 && (
                  <div className={style.tags_container}>
                    {post.hashTags.map((tag) => (
                      <span key={tag} className={style.tag_badge}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Rodapé com os ícones visuais */}
              <div className={style.footer_posts}>
                <button className={style.action_btn}>🤍 Curtir</button>
                <button className={style.action_btn}>💬 Comentar</button>
                <button className={style.action_btn}>🔗 Compartilhar</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
