import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CharacterCard = ({ character }) => {
  // const { store, dispactch } = useGlobalReducer

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

          <button className="btn btn-outline-warning">
            ❤️
          </button>
        </div>
      </div>

    </div>
  );
};
