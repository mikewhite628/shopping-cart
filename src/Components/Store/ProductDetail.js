import React, { useState, useEffect } from 'react'
import Inventory from './Inventory'
import { useParams } from 'react-router-dom'

const Details = (props) => {
console.log(props)

    const { addToCart, defaultValue, increment, decrement }  = props 

    let params = useParams()

    return (
        <div>
        <div className='details'>
            <h1>{Inventory[params.id].name}</h1> 
            <img src={Inventory[params.id].img} /> 
            <div>{Inventory[params.id].description}</div> 
            <div>{Inventory[params.id].price}</div>
        </div>
        <div className='quantity-input'>
            <button className='quantity-modifier, left-modifier' onClick={decrement} >
              &mdash;
            </button>
            <input className='quantity-input-screen' type='text'  value={defaultValue} readOnly/> 
            <button className='quantity-modifier, right-modifier' onClick={increment}>
              &#xff0b;
            </button>
          </div>
        <button onClick={() => addToCart(Inventory[params.id])}>
                add to cart
            </button>

        </div>
    )
}

export default Details 