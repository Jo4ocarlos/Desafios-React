import { NavLink } from "react-router-dom";
//css
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.nav}>

      <NavLink to="/" className={styles.brand}>
        Mini<span>BLog</span>
      </NavLink>

      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Cadastrar</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
