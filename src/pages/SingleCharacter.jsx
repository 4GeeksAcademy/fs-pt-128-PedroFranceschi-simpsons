
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";

export const SingleCharacter = () => {
  const { store, dispactch } = useGlobalReducer()

  const {id} = useParams()  // esto nos permite traer la data que estamos usando. 

  const character = store.characters.find(char => char.id === id)
  
  return (
    <div className="card container">
      <img
        src={`https://cdn.thesimpsonsapi.com/500/character/${character.id}.webp`}
        className="card-img-top"
        alt="character"
      />

      <div className="card-body">
        <h5 className="card-title text-center">Character Name</h5>

        <div className="d-flex justify-content-between mb-2">
          <span className="card-text">Gender: Male/Female</span>
          <span className="card-text">Age: XX</span>
        </div>

        <p className="card-text mb-3">D.O.B: MM-DD</p>

        <div className="d-flex justify-content-end mb-3">
          <span className="badge border border-success text-success rounded-pill px-3 py-2">
            Alive / Deceased
          </span>
        </div>

        <p className="card-text mb-3">
          This is a short description of the character for testing purposes.
        </p>

        <p className="card-text mb-3">
          First appeared in: Episode Name
        </p>

        <div className="mb-3">
          <p className="mb-1"><strong>Phrases:</strong></p>
          <ul className="list-unstyled mb-0">
            <li>"Phrase 1"</li>
            <li>"Phrase 2"</li>
            <li>"Phrase 3"</li>
          </ul>
        </div>

        {/* Action buttons */}
        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-warning">❤️</button>
        </div>
      </div>
    </div>

  );
};
