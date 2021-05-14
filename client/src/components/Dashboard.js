import React from 'react'
import PokemonList from './PokemonList'


const Dashboard = () => {
    return(
        <div>
        <h1>Dashboard</h1>
        <p className="dashboard-description">Search for Pokémon by name or using the National Pokédex number</p>
            <PokemonList />
        </div>
    )
}

export { Dashboard as default }