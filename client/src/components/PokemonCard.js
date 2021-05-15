import React from 'react'
import { v4 as uuid } from 'uuid'

const PokemonCard = ({ id, name, image, types }) => {
    const idFormat = (id) => {
        const stringId = id.toString()
        if(id < 10){
            return `#00${stringId}`
        } else if (id >= 10 && id < 100){
            return `#0${stringId}`
        }else if ( id >= 100) {
            return `#${stringId}`
        }
    }

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
                    <h1 className="card-pokemon-id">{idFormat(id)}</h1>
                    <h1 className="pokemon-name">{capitalizeFirstLetter(name)}</h1>
                    <div>
                        <div className="card-box-types">{types.map((type) => {
                            return <p key={uuid()} className={typeBackgroundColor(type)}>{type}</p>
                        })}</div>
                    </div>
                </div>
                <img className="pattern" src="./assets/pattern-small.svg" alt="pattern-small"/>
                <div className="card-image-container">
                    <img className="pokeball-image" src="./assets/Pokeball.png" alt="pokeball" />
                    <img className="pokemon-image" src={image} alt={name} />
                </div>

            </div>
        </div>
    )
}

export { PokemonCard as default }
