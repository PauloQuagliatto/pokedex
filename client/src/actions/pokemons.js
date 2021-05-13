//SET_POKEMONS
const setPokemons = (pokemons) =>({
    type: 'SET_POKEMONS',
    pokemons
  })
  
//START_SET_POKEMONS
  export const startSetPokemons = () => {
    return (dispatch) => {
      return fetch('https://pokemon-db-json.herokuapp.com/')
      .then(res => res.json())
      .then(pokemonsFetched => { 
        const pokemons = []
        pokemonsFetched.forEach((pokemonFetched) => {
            pokemons.push({
            id: pokemonFetched.id,
            ...pokemonFetched
          })
        })
        dispatch(setPokemons(pokemons))
        console.log("pokemons fetched")
      })
      .catch(err => console.log('error: ' + err ))
    }
  }