import { json } from "react-router-dom"

export const initialStore = () => {
  const favoritosGuardados = localStorage.getItem("favorites")

  return {
    characters: [],
    favorites: favoritosGuardados ? JSON.parse(favoritosGuardados) : []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'set_character':
      return {
        ...store,
        characters: action.payload
      }

    case 'add_favorite':
      const nuevosFavorites = [...store.favorites, action.payload]
      localStorage.setItem("favorites", JSON.stringify(nuevosFavorites))

      return {
        ...store,
        favorites: nuevosFavorites
      }

    case 'remove_fav':
      const favoritosFiltrados = store.favorites.filter(fav => fav.id != action.payload)
      localStorage.setItem("favorites", JSON.stringify(favoritosFiltrados))

      return {
        ...store,
        favorites: favoritosFiltrados
      }

    default:
      throw Error('Unknown action.');
  }
}
