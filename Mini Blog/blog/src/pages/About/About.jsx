import { Link } from "react-router-dom";
import styles from './About.module.css'
const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Mini <span>Blog</span>
      </h2>
      <p>Esse projeto consiste em um Blog feito com React no front-end e firebase no back-end</p>
      <Link className="btn" to={'/post/create'}>Criar Post</Link>
    </div>
  );
};

export default About;
