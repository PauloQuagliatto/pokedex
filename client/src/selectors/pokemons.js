/* eslint-disable import/no-anonymous-default-export */

export default (pokemons, { name, types, weakness, stage, weight, height, startNumber, endNumber, generation, sortBy }) => {
  return pokemons.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(name.toLowerCase())
    const typesMatch = types.length === 0 ? true : compareTypes(pokemon.types , types)

    return nameMatch && typesMatch
    // eslint-disable-next-line array-callback-return
  }).sort((a, b) => {
    if (sortBy === 'a-z') {
      return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    } else if (sortBy === 'z-a') {
      return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
    } else if (sortBy === 'smallestNumber') {
      return a.id < b.id ? -1 : 1
    } else if (sortBy === 'biggestNumber') {
      return a.id < b.id ? 1 : -1
    }
  })
}

const compareTypes = (pokemonTypes, filterTypes) => {
  let comparationResults = []
  for(let i=0; i < filterTypes.length; i++){
    for(let j=0; j < pokemonTypes.length; j++){
      if(pokemonTypes[j] !== undefined){
        const result = pokemonTypes[j].toLowerCase().includes(filterTypes[i].toLowerCase())
      comparationResults.push(result)
      }
    }
  }
  let shouldRender = 0
  for(let k=0; k <= comparationResults.length; k++){
    if(comparationResults[k] === true) {
      shouldRender++
    }
  }

  if(shouldRender === filterTypes.length){
    console.log('tem pokemon aqui')
    return true
  }

  return false
}