import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Store from './Components/Store/Store'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header';

const Routes = () => {
    return (
        <div>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/store' component={Store} />
                <Route path='/cart' component={Cart} />
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default Routes