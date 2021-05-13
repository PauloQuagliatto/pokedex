import React from 'react'
import { v4 as uuid } from 'uuid'

const PokemonSingleCard = ({ id, name, image, types }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="card-container">
            <div className="vector">
                <div className="card-texts-container">
                    <h1 className="card-pokemon-id">{id}</h1>
                    <h1 className="pokemon-name">{capitalizeFirstLetter(name)}</h1>
                    <div>
                        <div className="card-box-types">{types.map((type) => {
                            return <p key={uuid()} className="pokemon-type">{type}</p>
                        })}</div>
                    </div>
                    </div>
                    <div className="pattern">
                    </div>
                    <div className="card-image-container">
                        <img className="pokeball-image" src="./assets/Pokeball.png" alt="pokeball" />
                        <img className="pokemon-image" src={image} alt={name} />
                    </div>
                
            </div>
        </div>
    )
}

export { PokemonSingleCard as default }