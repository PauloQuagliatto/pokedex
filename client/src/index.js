import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './styles/styles.scss'
import Dashboard from './components/Dashboard'
import { startSetPokemons } from './actions/pokemons'

const store = configureStore()


const app = (
  <Provider store={store}>
    <Dashboard />
  </Provider>
)

let hasRendered = false

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('root'))
    hasRendered = true
  }
}


store.dispatch(startSetPokemons()).then(() => {
    renderApp()
})



