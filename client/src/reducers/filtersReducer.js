/* eslint-disable import/no-anonymous-default-export */

const filtersReducerDefaultState = {
    name: '',
    type: '',
    weakness: '',
    stage: '',
    weight: '',
    height: '',
    startNumber: '',
    endNumber: '',
    generation: '',
    sortBy: 'smallestNumber'
}

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_NAME_FILTER':
            return {
                ...state,
                name: action.name
            }
        case 'SET_TYPE_FILTER':
            return {
                ...state,
                type: action.type
            }
        case 'SET_WEAKNESS_FILTER':
            return {
                ...state,
                weakness: action.type
            }
        case 'SET_STAGE_FILTER':
            return {
                ...state,
                stage: action.stage
            }
        case 'SET_WEIGHT_FILTER':
            return {
                ...state,
                weight: action.weight
            }
        case 'SET_HEIGHT_FILTER':
            return {
                ...state,
                height: action.height
            }
        case 'SET_GENERATION_FILTER':
            return {
                ...state,
                generation: action.generation
            }
        case 'SET_START_NUMBER':
            return {
                ...state,
                startNumber: action.startNumber
            }
        case 'SET_END_NUMBER':
            return {
                ...state,
                endNumber: action.endNumber
            }
        case 'SORT_BY_AZ':
            return {
                ...action,
                sortBy: 'a-z'
            }
        case 'SORT_BY_ZA':
            return {
                ...action,
                sortBy: 'z-a'
            }
        case 'SORT_BY_SMALLEST_NUMBER':
            return {
                ...action,
                sortBy: 'smallestNumber'
            }
        case 'SORT_BY_BIGGEST_NUMBER':
            return {
                ...action,
                sortBy: 'biggestNumber'
            }
        default:
            return state
    }
}