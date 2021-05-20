export const filterByName = (name = '') => ({
    type: 'SET_NAME_FILTER',
    name
})

export const filterByType = (pokemonType) => ({
    type: 'SET_TYPE_FILTER',
    pokemonType
})

export const filterByWeakness = (weakness = '') => ({
    type: 'SET_WEAKNESS_FILTER',
    weakness
})

export const filterByStage = (stage = '') => ({
    type: 'SET_STAGE_FILTER',
    stage
})

export const filterByWeight = (weight = '') => ({
    type: 'SET_WEIGHT_FILTER',
    weight
})

export const filterByHeight = (height = '') => ({
    type: 'SET_HEIGHT_FILTER',
    height
})

export const filterByGeneration = (generation = '') => ({
    type: 'SET_GENERATION_FILTER',
    generation
})

export const setPokemonStartNumberFilter = (startNumber = 0) => ({
    type: 'SET_START_NUMBER',
    startNumber
})

export const setPokemonEndNumberFilter = (endNumber = 0) => ({
    type: 'SET_END_NUMBER',
    endNumber
})

export const sortByAZ = () => ({
    type: 'SORT_BY_AZ'
})

export const sortByZA = () => ({
    type: 'SORT_BY_ZA'
})

export const sortBySmallestNumber = () => ({
    type: 'SORT_BY_SMALLEST_NUMBER'
})

export const sortByBiggestNumber = () => ({
    type: 'SORT_BY_BIGGEST_NUMBER'
})