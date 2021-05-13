/* eslint-disable import/no-anonymous-default-export */
//Pokemons Reducer

const pokemonsDefaultState = []

export default (state = pokemonsDefaultState, action) => {
    switch (action.type) {
        case 'SET_POKEMONS':
            return action.pokemons
        default:
            return state
    }
}