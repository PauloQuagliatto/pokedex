import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const PokemonInfoPage = (props) => {
    console.log(props.pokemon)
    return(
    <div>
    <Link to="/">Voltar</Link>
       <h1>INFO</h1>
    </div>
)}


const mapStateToProps = (state, props) => {
  return{
    pokemon: state.pokemons.find((pokemon) => pokemon.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(PokemonInfoPage)