import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const PokemonInfoPage = ({ pokemon }) => {
  const formattedId = (id) => {
    const stringId = id.toString()
    if (id < 10) {
        return `#00${stringId}`
    } else if (id >= 10 && id < 100) {
        return `#0${stringId}`
    } else if (id >= 100) {
        return `#${stringId}`
    }
}

const formattedName = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    return(
    <div>
    <Link to="/">Voltar</Link>
    <h3>{formattedId(pokemon.id)}</h3>
       <h1>{formattedName(pokemon.name)}</h1>
    </div>
)}


const mapStateToProps = (state, props) => {
  return{
    pokemon: state.pokemons.find((pokemon) => pokemon.id === parseFloat(props.match.params.id))
  }
}

export default connect(mapStateToProps)(PokemonInfoPage)