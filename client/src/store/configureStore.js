/* eslint-disable import/no-anonymous-default-export */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import pokemonsReducer from '../reducers/pokemonsReducer'
import filtersReducer from '../reducers/filtersReducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      pokemons: pokemonsReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
