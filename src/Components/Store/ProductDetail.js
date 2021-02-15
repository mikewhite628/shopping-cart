import React, { useState, useEffect } from 'react'
import Inventory from './Inventory'
import { useParams } from 'react-router-dom'

const Details = (props) => {
console.log(props)

    const { addToCart, defaultValue, increment, decrement }  = props 

    let params = useParams()

    const addToCartStyle = {
        height: '30px',
        width: '100px',
        backgroundColor: '#24a0ed',
        color: 'white',
        border: 'none'
        
    }

    const stylePrice = {
        marginTop: '50px'
    }

    return (
        <div className='details-container'>
            <h1>{Inventory[params.id].name}</h1> 
        <div className='details'>
            <div className='details-item'>
            <img src={Inventory[params.id].img} className='guitar-img'/> 
            </div>
            <div className='description-box'>
            <div className='description-title'>Description</div>
            <div className='description'>{Inventory[params.id].description}</div> 
            </div>
        </div>
        <div style={stylePrice}>${Inventory[params.id].price.toLocaleString()}</div>
        <div className='quantity-input'>
            <button className='quantity-modifier, left-modifier' onClick={decrement} >
              &mdash;
            </button>
            <input className='quantity-input-screen' type='text'  value={defaultValue} readOnly/> 
            <button className='quantity-modifier, right-modifier' onClick={increment}>
              &#xff0b;
            </button>
          </div>
        <button onClick={() => addToCart(Inventory[params.id])} style={addToCartStyle}>
                add to cart
            </button>

        </div>
    )
}

export default Details 