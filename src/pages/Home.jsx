import { useEffect } from "react";
import { CharacterCard } from "../components/CharcacterCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters } from "../components/APIServices.js";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
      getCharacters(dispatch)
    },[])


	return (
		<div className="container mt-4">
			<div className="d-flex flex-nowrap overflow-auto gap-4 pb-3">
				{store.characters.map(character => {
					return (
						<CharacterCard key={character.id} character={character}/>
					)
				})
			}
			</div>
		</div>


	);
}; 