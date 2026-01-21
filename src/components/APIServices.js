

export const getCharacters = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters`)
    const data = await response.json()
    dispatch({type: "set_character", payload: data.results})
} 


export const getCharacter = async (id) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters/${id}`)
    const data = await response.json()
    return data
} 