import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterCard = ({ character }) => {
  const { store, dispatch } = useGlobalReducer()

  // const addFavorite = () => {
  //   dispatch({type: "add_favorite", payload: character})
  // }

  const toggleFavorito = (character) => {
    const exist = store.favorites.find(fav => fav.id === character.id)

    if (exist) {
      dispatch({ type: "remove_fav", payload: character.id })
    } else {
      dispatch({ type: "add_favorite", payload: character })
    }

  }

  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <img
        src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`}
        className="card-img-top"
        alt="character"
      />

      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text mb-1">Gender: {character.gender}</p>
        <p className="card-text mb-3">Age: {character.age}</p>

        <div className="d-flex justify-content-between align-items-center">
          <div className="text-center">
            <span
              className={`badge rounded-pill px-3 py-2 ${character.status === "Alive"
                ? "border border-success text-success"
                : "border border-secondary text-secondary"
                }`}
            >
              {character.status}
            </span>
          </div>

          <Link to={`characters/${character.id}`}>
            <button className="btn btn-outline-primary">
              Learn more!
            </button>
          </Link>

          <button
            className="btn btn-outline-warning"
            onClick={() => toggleFavorito(character)}
          >
            {
              store.favorites.find(fav => fav.id === character.id) ?
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
            }
          </button>
        </div>
      </div>

    </div>
  );
};
