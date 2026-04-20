import './CharacterCard.css'

const CharacterCard = ({characters}) => {
  return (
    <div>
        <ul className="character-area">
        {characters &&
          characters.map((character) => (
            <li key={character.id} className="character-card">
              <div className="character-name">
                <p>{character.name}</p>
              </div>
              <div className="character-image">
                <img
                  src={character.image}
                  alt={`foto do personagem ${character.name}`}
                />
              </div>
              <ul className="character-details">
                <li>Species: {character.species}</li>
                <li>Gender: {character.gender}</li>
                <li>Status: {character.status}</li>
              </ul>
              <div className="character-origin">
                <p>
                 {character.origin["name"]}
                </p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default CharacterCard