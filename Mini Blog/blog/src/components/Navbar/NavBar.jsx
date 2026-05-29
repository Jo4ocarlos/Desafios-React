import { NavLink, Link } from "react-router-dom";
//css
import styles from "./NavBar.module.css";

//hoooks
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext"; //usuario que é passado lá no app, vamos desestruturar atribuindo a uma variavel
const NavBar = () => {
  const { user } = useAuthValue();
  const { logOut } = useAuthentication();

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.brand}>
        Mini<span>BLog</span>
      </NavLink>

      <ul className={styles.navLinks}>
        {user && (
          <li>
          <NavLink to="/">Home</NavLink>
        </li>
        )}
        {/*usuarios não autenticados vão ver as paginas login e cadastrar caso contrario, vera as de usuarios autenticados */}
        {!user && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Cadastrar</NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink to="/post/create">Criar Postagem</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Notificações</NavLink>
            </li>
            <li>
              <NavLink to="/MyProfile">Meu Perfil</NavLink>
            </li>
            <li>
            <Link onClick={logOut}>Sair</Link>
          </li>
          </>
        )}

        
        {!user && (
          <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
