import React, { useState } from 'react'
import { Fragment } from 'react'

const TypeFilter = (props) => {
    const [bugSelected, setBugSelected] = useState(props.typesFilter.length === 0 ? './assets/icon/bug.svg' : props.typesFilter.map((typesFiltered) => typesFiltered === 'bug' ? './assets/icon/bugSelected.svg' : './assets/icon/bug.svg'))
    const [darkSelected, setDarkSelected] = useState('./assets/icon/dark.svg')
    const [dragonSelected, setDragonSelected] = useState('./assets/icon/dragon.svg')
    const [electricSelected, setElectricSelected] = useState('./assets/icon/electric.svg')
    const [fairySelected, setFairySelected] = useState('./assets/icon/fairy.svg')
    const [fightingSelected, setFightingSelected] = useState('./assets/icon/fighting.svg')
    const [fireSelected, setFireSelected] = useState('./assets/icon/fire.svg')
    const [flyingSelected, setFlyingSelected] = useState('./assets/icon/flying.svg')
    const [ghostSelected, setGhostSelected] = useState('./assets/icon/ghost.svg')
    const [grassSelected, setGrassSelected] = useState('./assets/icon/grass.svg')
    const [groundSelected, setGroundSelected] = useState('./assets/icon/ground.svg')
    const [iceSelected, setIceSelected] = useState('./assets/icon/ice.svg')
    const [normalSelected, setNormalSelected] = useState('./assets/icon/normal.svg')
    const [poisonSelected, setPoisonSelected] = useState('./assets/icon/poison.svg')
    const [psychicSelected, setPsychicSelected] = useState('./assets/icon/psychic.svg')
    const [rockSelected, setRockSelected] = useState('./assets/icon/rock.svg')
    const [steelSelected, setSteelSelected] = useState('./assets/icon/steel.svg')
    const [waterSelected, setWaterSelected] = useState('./assets/icon/water.svg')
    const [types, setTypes] = useState(props.typesFilter)

    const handleSelectBug = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('bug'))
        if (!match) {
            setTypes(types => [...types, 'bug'])
            props.setTypesFilter(types)
            setBugSelected('./assets/icon/bugSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'bug'))
            props.setTypesFilter(types)
            setBugSelected('./assets/icon/bug.svg')
        }
    }

    const handleSelectDark = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('dark'))
        if (!match) {
            setDarkSelected('./assets/icon/darkSelected.svg')
            setTypes(types => [...types, 'dark'])
            props.setTypesFilter(types)
        } else {
            setTypes(types.filter((type) => type !== 'dark'))
            props.setTypesFilter(types)
            setDarkSelected('./assets/icon/dark.svg')
        }
    }

    const handleSelectDragon = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('dragon'))
        if (!match) {
            setDragonSelected('./assets/icon/dragonSelected.svg')
            setTypes(types => [...types, 'dragon'])
            props.setTypesFilter(types)
        } else {
            setTypes(types.filter((type) => type !== 'dragon'))
            props.setTypeFilter(types)
            setDragonSelected('./assets/icon/dragon.svg')
        }
    }

    const handleSelectElectric = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('electric'))
        if (!match) {
            setTypes(types => [...types, 'electric'])
            props.setTypesFilter(types)
            setElectricSelected('./assets/icon/electricSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'electric'))
            props.setTypesFilter(types)
            setElectricSelected('./assets/icon/electric.svg')
        }
    }

    const handleSelectFairy = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('fairy'))
        if (!match) {
            setTypes(types => [...types, 'fairy'])
            props.setTypesFilter(types)
            setFairySelected('./assets/icon/fairySelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'fairy'))
            props.setTypesFilter(types)
            setFairySelected('./assets/icon/fairy.svg')
        }
    }

    const handleSelectFighting = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('fighting'))
        if (!match) {
            setTypes(types => [...types, 'fighting'])
            props.setTypesFilter(types)
            setFightingSelected('./assets/icon/fightingSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'fighting'))
            props.setTypesFilter(types)
            setFightingSelected('./assets/icon/fighting.svg')
        }
    }

    const handleSelectFire = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('fire'))
        if (!match) {
            setTypes(types => [...types, 'fire'])
            props.setTypesFilter(types)
            setFireSelected('./assets/icon/fireSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'fire'))
            props.setTypseFilter(types)
            setFireSelected('./assets/icon/fire.svg')
        }
    }

    const handleSelectFlying = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('flying'))
        if (!match) {
            setTypes(types => [...types, 'flying'])
            props.setTypesFilter(types)
            setFlyingSelected('./assets/icon/flyingSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'flying'))
            props.setTypesFilter(types)
            setFlyingSelected('./assets/icon/flying.svg')
        }
    }

    const handleSelectGhost = () => {
        const match = types.length === 0 ? false : types.map((type) => type.toLowerCase().match('ghost'))
        if (!match) {
            setTypes(types => [...types, 'ghost'])
            props.setTypesFilter(types)
            setGhostSelected('./assets/icon/ghostSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'ghost'))
            props.setTypesFilter(types)
            setGhostSelected('./assets/icon/ghost.svg')
        }
    }

    const handleSelectGrass = () => {
        if (grassSelected === './assets/icon/grass.svg') {
            setTypes(types => [...types, 'grass'])
            props.setTypesFilter(types)
            setGrassSelected('./assets/icon/grasstSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'grass'))
            props.setTypesFilter(types)
            setGrassSelected('./assets/icon/grass.svg')
        }
    }

    const handleSelectGround = () => {
        if (groundSelected === './assets/icon/ground.svg') {
            setTypes(types => [...types, 'ground'])
            props.setTypesFilter(types)
            setGroundSelected('./assets/icon/groundtSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'ground'))
            props.setTypesFilter(types)
            setGroundSelected('./assets/icon/ground.svg')
        }
    }
    const handleSelectIce = () => {
        if (iceSelected === './assets/icon/ice.svg') {
            setTypes(types => [...types, 'ice'])
            props.setTypesFilter(types)
            setIceSelected('./assets/icon/iceSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'ice'))
            props.setTypesFilter(types)
            setIceSelected('./assets/icon/ice.svg')
        }
    }

    const handleSelectNormal = () => {
        if (normalSelected === './assets/icon/normal.svg') {
            setTypes(types => [...types, 'normal'])
            props.setTypesFilter(types)
            setNormalSelected('./assets/icon/normalSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'normal'))
            props.setTypesFilter(types)
            setNormalSelected('./assets/icon/normal.svg')
        }
    }

    const handleSelectPoison = () => {
        if (poisonSelected === './assets/icon/poison.svg') {
            setTypes(types => [...types, 'poison'])
            props.setTypesFilter(types)
            setPoisonSelected('./assets/icon/poisonSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'poison'))
            props.setTypesFilter(types)
            setPoisonSelected('./assets/icon/poison.svg')
        }
    }

    const handleSelectPsychic = () => {
        if (psychicSelected === './assets/icon/psychic.svg') {
            setTypes(types => [...types, 'psychic'])
            props.setTypesFilter(types)
            setPsychicSelected('./assets/icon/psychicSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'psychic'))
            props.setTypesFilter(types)
            setPsychicSelected('./assets/icon/psychic.svg')
        }
    }

    const handleSelectRock = () => {
        if (rockSelected === './assets/icon/rock.svg') {
            setTypes(types => [...types, 'rock'])
            props.setTypesFilter(types)
            setRockSelected('./assets/icon/rockSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'rock'))
            props.setTypesFilter(types)
            setRockSelected('./assets/icon/rock.svg')
        }
    }

    const handleSelectSteel = () => {
        if (steelSelected === './assets/icon/steel.svg') {
            setTypes(types => [...types, 'steel'])
            props.setTypesFilter(types)
            setSteelSelected('./assets/icon/steelSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'steel'))
            props.setTypesFilter(types)
            setSteelSelected('./assets/icon/steel.svg')
        }
    }
    const handleSelectWater = () => {
        if (waterSelected === './assets/icon/water.svg') {
            setTypes(types => [...types, 'water'])
            props.setTypesFilter(types)
            setWaterSelected('./assets/icon/waterSelected.svg')
        } else {
            setTypes(types.filter((type) => type !== 'water'))
            props.setTypesFilter(types)
            setWaterSelected('./assets/icon/water.svg')
        }
    }
    return (
        <Fragment>
            <h3>Type</h3>
            <img src={bugSelected} alt="bug-type-pokemon-icon" className="icon-filter" onClick={handleSelectBug} />
            <img src={darkSelected} alt="dark-type-pokemon-icon" className="icon-filter" onClick={handleSelectDark} />
            <img src={dragonSelected} alt="dragon-type-pokemon-icon" className="icon-filter" onClick={handleSelectDragon} />
            <img src={electricSelected} alt="electric-type-pokemon-icon" className="icon-filter" onClick={handleSelectElectric} />
            <img src={fairySelected} alt="fairy-type-pokemon-icon" className="icon-filter" onClick={handleSelectFairy} />
            <img src={fightingSelected} alt="fighting-type-pokemon-icon" className="icon-filter" onClick={handleSelectFighting} />
            <img src={fireSelected} alt="fire-type-pokemon-icon" className="icon-filter" onClick={handleSelectFire} />
            <img src={flyingSelected} alt="flying-type-pokemon-icon" className="icon-filter" onClick={handleSelectFlying} />
            <img src={ghostSelected} alt="ghost-type-pokemon-icon" className="icon-filter" onClick={handleSelectGhost} />
            <img src={grassSelected} alt="grass-type-pokemon-icon" className="icon-filter" onClick={handleSelectGrass} />
            <img src={groundSelected} alt="ground-type-pokemon-icon" className="icon-filter" onClick={handleSelectGround} />
            <img src={iceSelected} alt="biceug-type-pokemon-icon" className="icon-filter" onClick={handleSelectIce} />
            <img src={normalSelected} alt="normal-type-pokemon-icon" className="icon-filter" onClick={handleSelectNormal} />
            <img src={poisonSelected} alt="poison-type-pokemon-icon" className="icon-filter" onClick={handleSelectPoison} />
            <img src={psychicSelected} alt="psychic-type-pokemon-icon" className="icon-filter" onClick={handleSelectPsychic} />
            <img src={rockSelected} alt="rock-type-pokemon-icon" className="icon-filter" onClick={handleSelectRock} />
            <img src={steelSelected} alt="steel-type-pokemon-icon" className="icon-filter" onClick={handleSelectSteel} />
            <img src={waterSelected} alt="water-type-pokemon-icon" className="icon-filter" onClick={handleSelectWater} />
        </Fragment>
    )
}

export { TypeFilter as default }