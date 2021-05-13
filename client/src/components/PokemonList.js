import React from 'react'
import { connect } from 'react-redux'
//import selectPokemons from '../selectors/pokemons'
//import PokemonCard from './PokemonCard'
import PokemonSingleCard from './PokemonSingleCard'

const PokemonList = ({ pokemons }) => {

    return (
        <div className="pokemon-list">
            {<PokemonSingleCard {...pokemons[0]}/>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { pokemons: state.pokemons }
}

export default connect(mapStateToProps)(PokemonList)