export const initialStore = () => {
  return {
    characters: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'set_character':
    return {
      ...store,
      characters: action.payload 
    }

    default:
      throw Error('Unknown action.');
  }
}
