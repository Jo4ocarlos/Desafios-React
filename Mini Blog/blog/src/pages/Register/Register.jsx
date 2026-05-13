//css
import styles from "./Register.module.css";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error, setError] = useState('')
//dependencias que vem do nosso hook (useAuthentication)
  const {auth, createUser, error: authError, loading} = useAuthentication();


  const handleSubmit = async (e)=>{
    e.preventDefault()

    if(password !== confirmPass){
      setError("As senhas precisam ser iguais")
      return
    }

    const newUser = {
      displayName,
      email,
      password
    }

    const res = await createUser(newUser)
    cleanStates()
    console.log(newUser)
  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[authError])

    const cleanStates= ()=>{
    setDisplayName('')
    setEmail('')
    setPassword('')
    setConfirmPass('')
    setError("")
    }

  return (
    <div className={styles.register_page}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" required placeholder="Nome do usuario" value={displayName} onChange={(e)=> setDisplayName(e.target.value)}/>
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="Email do usuário" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Crie sua senha" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </label>

        <label>
          <span>Confirme sua senha:</span>
          <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" value={confirmPass} onChange={(e)=> setConfirmPass(e.target.value)}/>
        </label>
        {loading && <button className="btn" disabled>Carregando...</button>}
        {!loading && <button className="btn">Entrar</button>}

      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Register;
