/* eslint-disable import/no-anonymous-default-export */

export default (pokemons, { name, type, weakness, stage, weight, height, startNumber, endNumber, generation, sortBy }) => {
  return pokemons.filter((pokemon) => {
    const nameMatch = pokemon.name.toLowerCase().includes(name.toLowerCase())

    return nameMatch
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