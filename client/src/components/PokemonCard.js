import React from 'react'
import { v4 as uuid } from 'uuid'

const PokemonCard = ({ id, name, image, types }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const typeToVectorCSS = (types) => {
        const type = types[0]
        return `vector background--${type}`
    }

    const typeBackgroundColor = (type) => {
        return `pokemon-type type--${type}`
    }

    return (
        <div className="card-container">
            <div className={typeToVectorCSS(types)}>
                <div className="card-texts-container">
                    <h1 className="card-pokemon-id">{id}</h1>
                    <h1 className="pokemon-name">{capitalizeFirstLetter(name)}</h1>
                    <div>
                        <div className="card-box-types">{types.map((type) => {
                            return <p key={uuid()} className={typeBackgroundColor(type)}>{type}</p>
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

export { PokemonCard as default }
