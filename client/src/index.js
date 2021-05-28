import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetPokemons } from './actions/pokemons'
import './styles/styles.scss'
import AppRouter from './routes/AppRouter'
import LoadingPage from './components/LoadingPage'


const store = configureStore()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<LoadingPage />, document.getElementById('root'))



if (store.getState().pokemons.lenght === 0 || store.getState().pokemons.lenght === undefined) {
  store.dispatch(startSetPokemons()).then(() => {
    setTimeout(() => {ReactDOM.render(app, document.getElementById('root'))}, 1000)
  })
} else if(store.getState().pokemons.lenght !== 0) {
  console.log('should go')
  setTimeout(50000, ReactDOM.render(app, document.getElementById('root')))
}

