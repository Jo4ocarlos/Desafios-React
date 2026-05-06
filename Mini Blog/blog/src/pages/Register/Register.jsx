//css
import styles from "./Register.module.css";

//hooks
import { useState, useEffect } from "react";

const Register = () => {

  const handleSubmit = ()=>{
    
  }

  return (
    <div className={styles.register_page}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder="Nome do usuario"/>
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="Email do usuário"/>
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Digite sua senha"/>
        </label>

        <label>
          <span>Confirme sua senha:</span>
          <input type="password" name="confirmPassword" required placeholder="Confime sua senha"/>
        </label>
        <button className="btn">Entrar</button>
      </form>
      <p>mensagem de erro</p>
    </div>
  );
};

export default Register;
