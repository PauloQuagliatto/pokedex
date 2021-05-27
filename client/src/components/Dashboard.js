import React, { Fragment, useEffect, useState } from 'react'
import IconFilters from './IconFilters'
import PokemonList from './PokemonList'
import InputFilter from './InputFilter'
import { startSetPokemons } from '../actions/pokemons'
import { connect } from 'react-redux'

const Dashboard = ({ startSetPokemons }) => {
    const [shadow, setShadow] = useState(false)
    useEffect(() => {
        startSetPokemons()
    }, [])

    const dropShadow = () => {
        if(window.scrollY > 45){
            setShadow(true)
        } else {
            setShadow(false)
        }
    }
    window.addEventListener('scroll', dropShadow)
    return (
        <Fragment>
        <div className={shadow ? "dashboard-fix drop-shadow" : "dashboard-fix"}>
        <div  className="dashboard-icon-filters-container">
            <IconFilters />
            </div>            
            <div className="dashboard-box">
                <h1 className="dashboard-title">Pokédex</h1>
                <p className="dashboard-description">Search for Pokémon by name or using the National Pokédex number</p>
                <InputFilter />
            </div>
            </div>
             <PokemonList />
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startSetPokemons: () => dispatch(startSetPokemons())
    }
}

export default connect(undefined, mapDispatchToProps)(Dashboard)