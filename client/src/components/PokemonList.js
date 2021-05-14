import React from 'react'
import { connect } from 'react-redux'
//import selectPokemons from '../selectors/pokemons'
import PokemonCard from './PokemonCard'

const PokemonList = ({ pokemons }) => {

    return (
        <div className="pokemon-list">
            {pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.id} {...pokemon} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { pokemons: state.pokemons }
}

export default connect(mapStateToProps)(PokemonList)