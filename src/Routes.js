import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom' 
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header';
import Products from './Components/Store/Products'
import Details from './Components/Store/ProductDetail';

const Routes = () => {

    const [cart, setCart] = useState([])
    const [defaultValue, setDefaultValue] = useState(1)
    
    
    const addToCart = (item) => {
        let newCart = [...cart]
        let itemInCart = cart.find(
            (product) => item.name === product.name
        )
        if (itemInCart) {
            itemInCart.quantity = itemInCart.quantity + defaultValue
        } else {
            itemInCart = {
                ...item,
                quantity: defaultValue,
            }
            newCart.push(itemInCart)
        }
        setCart(newCart)
        setDefaultValue(1)
    }  
    
    const removeFromCart = (itemToRemove) => {
        let newCart = [...cart]
        let itemInCart = cart.find(
            (product) => itemToRemove.quantity = product.quantity
        )
        if (itemToRemove.quantity > 1) {
            itemInCart.quantity = itemInCart.quantity - 1
            setCart(newCart)
        } else {
            setCart(
                cart.filter((items) => items.id !== itemToRemove.id))
        }
    }

    const clearCart = () => {
        setCart([])
    } 

    const total = () => {
        return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
    }

    const getCartTotal = () => {
        return cart.reduce((sum, {quantity}) => sum + quantity, 0
        )}

    const increment = () => {
        setDefaultValue(defaultValue + 1)
    }

    const decrement = () => {
        setDefaultValue(defaultValue - 1)
    }


    return (
        <div className='App'>
        <Router basename={process.env.PUBLIC_URL}>
            <Header getCartTotal={getCartTotal()}/>
            <Switch>
                <Route exact path='/home'> 
                <Home />
                </Route>
                    
                <Route exact path='/store'>
                    <Products addToCart={addToCart} removeFromCart={removeFromCart} />
                </Route> 
                <Route path='/cart'>
                    <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} total={total()}/>
                </Route>
                <Route path='/store/:id'>
                    <Details addToCart={addToCart} removeFromCart={removeFromCart}  increment={increment.bind(this)} decrement={decrement.bind(this)} defaultValue={defaultValue} />
                </Route> 
            </Switch>
        </Router>
        </div>
    )
}

export default Routes