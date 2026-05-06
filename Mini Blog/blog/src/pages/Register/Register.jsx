import styles from "./Register.module.css";
const Register = () => {

  const handleSubmit = ()=>{
    
  }

  return (
    <div className={styles.register_page}>
      <h1>Cadastre-se para postar</h1>
      <p>crie seu usuário e compartilhe suas histórias</p>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Nome:</span>
          <input type="text" />
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email" />
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" />
        </label>
        
        <label>
          <span>Confirme sua senha:</span>
          <input type="password" />
        </label>
        <button>Entrar</button>
      </form>
      <p>mensagem de erro</p>
    </div>
  );
};

export default Register;
