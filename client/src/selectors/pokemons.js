/* eslint-disable import/no-anonymous-default-export */

export default (pokemons, { text, sortBy }) => {
    return pokemons.filter((pokemon) => {
      const nameMatch = pokemon.name.toLowerCase().includes(text.toLowerCase())
  
      return nameMatch 
    // eslint-disable-next-line array-callback-return
    }).sort((a, b) => {
      if(sortBy === 'a-z') {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
      } 
    })
  }