import "./Researcher.css";
import { MapPin } from "lucide-react";

const Reasearcher = ({ user, loading, error }) => {
  return (
    <div className="card-area">
      {loading && <p>Aguarde estamos realizando a busca...</p>}
      {error && <p className="error">{error}</p>}
      {user && (
        <div className="card-user">
          <div className="header-card">
            {/* card principal */}
            <span>
              <img
                src={user.avatar_url}
                alt={`Foto de perfil de ${user.name}`}
              />{" "}
              {/* nunca esquecer da acessibilidade de imagens e afins */}
            </span>
            <div>
              <p>
                <strong>Nome:</strong> {user.name}
              </p>
              {user.company && (
                <p>
                  <strong>Empresa:</strong> {user.company}
                </p>
              )}
              {user.bio && (
                <p>
                  <strong>Bio:</strong> {user.bio}
                </p>
              )}
              {user.location && (
                <p>
                  <strong>
                    <MapPin color="black" size={15} /> {user.location}
                  </strong>
                </p>
              )}
            </div>
          </div>

          <div className="user-infs">
            {/* area dos seguidores e outras informações */}
            <span>
              <h5>Seguidores</h5>
              <p>{user.followers}</p>
            </span>
            <span>
              <h5>Seguindo</h5>
              <p>{user.following}</p>
            </span>
            <span>
              <h5>Repositórios Públicos</h5>
              <p>{user.public_repos}</p>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reasearcher;
