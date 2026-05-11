import { useState } from "react";
import styles from "./Login.module.css";


const Login = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState();

  const handleSubmit = () => {console.log('fsfs')};

  return (
    <div className={styles.login_page}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o nosso blog</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input type="email" placeholder="E-mail do usuário" required onChange={(e)=> setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" placeholder="Digite sua senha" required onChange={(e)=> setPassword(e.target.value)} />
        </label>
        <button  className="btn">Entrar</button>
      </form>
      <p className="error">
        mensagem de erro <br /> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Fugit itaque, quos pariatur laborum perferendis
        recusandae blanditiis quia porro atque in distinctio accusantium
        mollitia vero voluptates alias, ad nobis! Fugit, tenetur?
      </p>
    </div>
  );
};

export default Login;
