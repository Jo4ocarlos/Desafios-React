import './Researcher.css'


const Reasearcher = ({ user, loading, error }) => {


  return (
    <div className='card-area'>
      {loading &&
      <p>Aguarde estamos realizando a busca...</p>
      }
      {error && 
      <p>{error}</p>
      }
      {user && (
        <div className='card-user'>

          <div className='header-card'>
            {/* card principal */}
            <span>
              <img src={user.avatar_url} alt="imagem do usuario" />
            </span>
            <div>
              <p>Nome: {user.name}</p>
              <p>Empresa: {user.company}</p>
              <p></p>
            </div>
          </div>

          <div className='user-infs'>
            {/* area dos seguidores e seguindo */}
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
