import React from 'react'
import PokemonList from './PokemonList'
import Filters from './Filters'

const Dashboard = () => {
    return (
        <div>
            <div className="dashboard-box">
                <h1 className="dashboard-title">Pokédex</h1>
                <p className="dashboard-description">Search for Pokémon by name or using the National Pokédex number</p>
                <Filters />
            </div>
            <PokemonList />
        </div>
    )
}

export { Dashboard as default }