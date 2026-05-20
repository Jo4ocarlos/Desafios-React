import React from "react";
import style from './Posts.module.css'
const Posts = ({ posts }) => {
  return (
    <ul>
      <li>
        <div className={style.header_posts}>
            <img src="" alt="" />
            <h1>user Name</h1>
        </div>
        
        <div className={style.body_posts}>

        </div>
      </li>
    </ul>
  );
};

export default Posts;
