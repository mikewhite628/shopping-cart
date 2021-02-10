import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header';
import Products from './Components/Store/Products'
import Details from './Components/Store/ProductDetail';

const Routes = () => {

    const [cart, setCart] = useState([])
    
    const addToCart = (item) => {
        setCart([...cart, item])
    }  
    
    const removeFromCart = (itemToRemove) => {
        console.log(itemToRemove)
        setCart(cart.filter(items => items !== itemToRemove))
    }

    const clearCart = () => {
        setCart([])
    } 

    const total = () => {
        return cart.reduce((sum, { price }) => sum + price, 0)
    }


    return (
        <div>
        <BrowserRouter>
            <Header cart={cart}/>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/store'>
                    <Products addToCart={addToCart} removeFromCart={removeFromCart}/>
                </Route> 
                <Route path='/cart'>
                    <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} total={total()}/>
                </Route>
                <Route path='/store/:id'>
                    <Details addToCart={addToCart} removeFromCart={removeFromCart}/>
                </Route> 
            </Switch>
        </BrowserRouter>
        </div>
    )
}

export default Routes