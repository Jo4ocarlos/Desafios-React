import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import { useAuthentication } from "../../hooks/useAuthentication";


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState()
  const {logIn, error: authError, loading} = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const loginUSer = {
      email,
      password,
    }
  
    const res = await logIn(loginUSer)
    console.log(res)
  };

  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[authError])

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
      {error && <p className="error">
        {error}
      </p>}
      
    </div>
  );
};

export default Login;
