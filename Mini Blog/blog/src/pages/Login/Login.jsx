import styles from './Login.module.css'

const handleSubmit = ()=>{

}

const Login = () => {
  return (
    <div className={styles.login_page}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o nosso blog</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input type="email"/>
        </label>

        <label>
          <span>Senha:</span>
          <input type="password"/>
        </label>
        <button>Entrar</button>
      </form>
      <p>mensagem de erro</p>
    </div>
  );
};

export default Login;
