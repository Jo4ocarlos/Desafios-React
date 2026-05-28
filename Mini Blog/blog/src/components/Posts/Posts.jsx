import React from "react";
import style from "./Posts.module.css";
import { Link } from "react-router-dom";
const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts && posts.length === 0 && (
          <div className={style.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/post/create" className="btn">
              Criar Primeiro post
            </Link>
          </div>
        )}
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <div className={style.header_posts}>
                <img src="" alt="" />
                <h1>user Name</h1>
              </div>

              <div className={style.body_posts}>
                <h1>{post.title}</h1>
              </div>
              <div className={style.footer_posts}></div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
