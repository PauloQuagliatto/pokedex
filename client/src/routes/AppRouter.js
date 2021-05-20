import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import PokemonInfoPage from '../components/PokemonInfoPage'
import { createBrowserHistory } from 'history'

let history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/pokemon/:id" component={PokemonInfoPage} />
        </Switch>
    </Router>
)

export { AppRouter as default }