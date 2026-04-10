import { useFetch } from "../hooks/useFetch";

const Reasearcher = ({ user }) => {
  
  return (
    <div>
      {user && (
        <div>
          <div>
            {/* card principal */}
            <span>
              <img src="user.avatar_url" alt="imagem do usuario" />
            </span>
            <div>
              <p>Nome: {user.name}</p>
              <p>Empresa: {user.company}</p>
              <p></p>
            </div>
          </div>
          <div>
            {" "}
            {/* area dos seguidores e seguindo */}
            <span>
              <h5>Seguidores</h5>
              <p>{user.followers}</p>
            </span>
            <span>
              <h5>Seguindo</h5>
              <p>{user.following}</p>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reasearcher;
