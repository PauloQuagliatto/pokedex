import React from 'react'
import IconFilters from './IconFilters'
import PokemonList from './PokemonList'
import InputFilter from './InputFilter'

const Dashboard = () => {
    return (
        <div>
            <div  className="dashboard-icon-filters-container">
            <IconFilters />
            </div>            
            <div className="dashboard-box">
                <h1 className="dashboard-title">Pokédex</h1>
                <p className="dashboard-description">Search for Pokémon by name or using the National Pokédex number</p>
                <InputFilter />
            </div>
            <PokemonList />
        </div>
    )
}

export { Dashboard as default }