import React from 'react'
import { v4 as uuid } from 'uuid'

const PokemonCard = ({ id, name, image, types }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="card-pokemon">
        <div className="card-vector">
        <div className="card-pattern">
        <div className="">
            <div>
                <h1 className="card-pokemon-id">{id}</h1>
                <h1 className="pokemon-name">{capitalizeFirstLetter(name)}</h1>
            </div>
            <div>
                <div>{types.map((type)=>{return <p key={uuid()}>{type}</p>})}</div>
            </div>
            <img className="pokemon-card-image" src={image} alt={name} />
        </div>
        </div>
        </div>
        </div>
    )
}

export { PokemonCard as default }
