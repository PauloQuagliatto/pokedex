import React, { Fragment, useState } from 'react'
import IconFilters from './IconFilters'
import PokemonList from './PokemonList'
import InputFilter from './InputFilter'
import PokemonSortModal from './PokemonSortModal'
import PokemonFiltersModal from './PokemonFiltersModal'

const Dashboard = ({ startSetPokemons }) => {
    const [shadow, setShadow] = useState(false)
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [isFiltersOpen, setIsFilterOpen] = useState(false)

    const openSortModal = () => {
        setIsSortOpen(true)
    }
    const closeSortModal = () => {
        setIsSortOpen(false)
    }
    
    const openFiltersModal = () => {
        setIsFilterOpen(true)
    }
    const closeFiltersModal = () => {
        setIsFilterOpen(false)
    }

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
        <div>
        
        </div>
        <div className={shadow ? "dashboard-fix drop-shadow" : "dashboard-fix"}>
        <div  className="dashboard-icon-filters-container">
            <IconFilters openFiltersModal={openFiltersModal} openSortModal={openSortModal} />
            </div>            
            <div className="dashboard-box">
                <h1 className="dashboard-title">Pokédex</h1>
                <p className="dashboard-description">Search for Pokémon by name or using the National Pokédex number</p>
                <InputFilter />
            </div>
            </div>
            <PokemonSortModal isOpen={isSortOpen} closeModal={closeSortModal} />
            <PokemonFiltersModal isOpen={isFiltersOpen} closeModal={closeFiltersModal} />
             <PokemonList />
        </Fragment>
    )
}

export { Dashboard as default }