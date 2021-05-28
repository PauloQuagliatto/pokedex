import React, { useState } from 'react'
import { Fragment } from 'react'

const SelectWeaknessFilter = (props) => {
    const [bugSelected, setBugSelected] = useState('./assets/icon/bug.svg')
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

    const handleSelectBug = () => {
        if(bugSelected === './assets/icon/bug.svg'){
            setBugSelected('./assets/icon/bugSelected.svg')
        }else {
            setBugSelected('./assets/icon/bug.svg')
        }
    }

    const handleSelectDark = () => {
        if(darkSelected === './assets/icon/dark.svg'){
            setDarkSelected('./assets/icon/darkSelected.svg')
        }else{
            setDarkSelected('./assets/icon/dark.svg')
        }
    }

    const handleSelectDragon = () => {
        if(dragonSelected === './assets/icon/dragon.svg'){
            setDragonSelected('./assets/icon/dragonSelected.svg')
        }else{
            setDragonSelected('./assets/icon/dragon.svg')
        }
    }

    const handleSelectElectric = () => {
        if(electricSelected === './assets/icon/electric.svg'){
            setElectricSelected('./assets/icon/electricSelected.svg')
        }else{
            setElectricSelected('./assets/icon/electric.svg')
        }
    }

    const handleSelectFairy = () => {
        if(fairySelected === './assets/icon/fairy.svg'){
            setFairySelected('./assets/icon/fairySelected.svg')
        }else{
            setFairySelected('./assets/icon/fairy.svg')
        }
    }

    const handleSelectFighting = () => {
        if(fightingSelected === './assets/icon/fighting.svg'){
            setFightingSelected('./assets/icon/fightingSelected.svg')
        }else{
            setFightingSelected('./assets/icon/fighting.svg')
        }
    }

    const handleSelectFire = () => {
        if(fireSelected === './assets/icon/fire.svg'){
            setFireSelected('./assets/icon/fireSelected.svg')
        }else{
            setFireSelected('./assets/icon/fire.svg')
        }
    }

    const handleSelectFlying = () => {
        if(flyingSelected === './assets/icon/flying.svg'){
            setFlyingSelected('./assets/icon/flyingSelected.svg')
        }else{
            setFlyingSelected('./assets/icon/flying.svg')
        }
    }

    const handleSelectGhost = () => {
        if(ghostSelected === './assets/icon/ghost.svg'){
            setGhostSelected('./assets/icon/ghostSelected.svg')
        }else{
            setGhostSelected('./assets/icon/ghost.svg')
        }
    }

    const handleSelectGrass = () => {
        if(grassSelected === './assets/icon/grass.svg'){
            setGrassSelected('./assets/icon/grasstSelected.svg')
        }else{
            setGrassSelected('./assets/icon/grass.svg')
        }
    }

    const handleSelectGround = () => {
        if(groundSelected === './assets/icon/ground.svg'){
            setGroundSelected('./assets/icon/groundtSelected.svg')
        }else{
            setGroundSelected('./assets/icon/ground.svg')
        }
    }
    const handleSelectIce = () => {
        if(iceSelected === './assets/icon/ice.svg'){
            setIceSelected('./assets/icon/iceSelected.svg')
        }else{
            setIceSelected('./assets/icon/ice.svg')
        }
    }

    const handleSelectNormal = () => {
        if(normalSelected === './assets/icon/normal.svg'){
            setNormalSelected('./assets/icon/normalSelected.svg')
        }else{
            setNormalSelected('./assets/icon/normal.svg')
        }
    }

    const handleSelectPoison = () => {
        if(poisonSelected === './assets/icon/poison.svg'){
            setPoisonSelected('./assets/icon/poisonSelected.svg')
        }else{
            setPoisonSelected('./assets/icon/poison.svg')
        }
    }

    const handleSelectPsychic = () => {
        if(psychicSelected === './assets/icon/psychic.svg'){
            setPsychicSelected('./assets/icon/psychicSelected.svg')
        }else{
            setPsychicSelected('./assets/icon/psychic.svg')
        }
    }

    const handleSelectRock = () => {
        if(rockSelected === './assets/icon/rock.svg'){
            setRockSelected('./assets/icon/rockSelected.svg')
        }else{
            setRockSelected('./assets/icon/rock.svg')
        }
    }

    const handleSelectSteel = () => {
        if(steelSelected === './assets/icon/steel.svg'){
            setSteelSelected('./assets/icon/steelSelected.svg')
        }else{
            setSteelSelected('./assets/icon/steel.svg')
        }
    }
    const handleSelectWater = () => {
        if(waterSelected === './assets/icon/water.svg'){
            setWaterSelected('./assets/icon/waterSelected.svg')
        }else{
            setWaterSelected('./assets/icon/water.svg')
        }
    }
    return (
        <Fragment>
            <h3>Weakness</h3>
            <img src={bugSelected} alt="bug-type-pokemon-icon"  onClick={handleSelectBug} />
            <img src={darkSelected} alt="dark-type-pokemon-icon" onClick={handleSelectDark} />
            <img src={dragonSelected} alt="dragon-type-pokemon-icon"  onClick={handleSelectDragon} />
            <img src={electricSelected} alt="electric-type-pokemon-icon"  onClick={handleSelectElectric} />
            <img src={fairySelected} alt="fairy-type-pokemon-icon"  onClick={handleSelectFairy} />
            <img src={fightingSelected} alt="fighting-type-pokemon-icon" onClick={handleSelectFighting} />
            <img src={fireSelected} alt="fire-type-pokemon-icon" onClick={handleSelectFire} />
            <img src={flyingSelected} alt="flying-type-pokemon-icon" onClick={handleSelectFlying} />
            <img src={ghostSelected} alt="ghost-type-pokemon-icon" onClick={handleSelectGhost} />
            <img src={grassSelected} alt="grass-type-pokemon-icon" onClick={handleSelectGrass} />
            <img src={groundSelected} alt="ground-type-pokemon-icon" onClick={handleSelectGround} />
            <img src={iceSelected} alt="biceug-type-pokemon-icon" onClick={handleSelectIce} />
            <img src={normalSelected} alt="normal-type-pokemon-icon" onClick={handleSelectNormal} />
            <img src={poisonSelected} alt="poison-type-pokemon-icon" onClick={handleSelectPoison} />
            <img src={psychicSelected} alt="psychic-type-pokemon-icon" onClick={handleSelectPsychic} />
            <img src={rockSelected} alt="rock-type-pokemon-icon" onClick={handleSelectRock} />
            <img src={steelSelected} alt="steel-type-pokemon-icon" onClick={handleSelectSteel} />
            <img src={waterSelected} alt="water-type-pokemon-icon" onClick={handleSelectWater} />
        </Fragment>
    )
}

export { SelectWeaknessFilter as default }