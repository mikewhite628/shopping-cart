import React from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'

const Tiles = (props) => {

    const {
        item: { name, img, price, id},
        addToCart,
        removeFromCart
    } = props

    return (
        <div className='item-tile'>
            <Link to={`/store/${id}`}>
            <span>{name}</span> 
            <img src={img} alt={name}/> 
            <span>{price}</span>
            </Link>
            <button onClick={() => addToCart(Inventory[id])}>
                add to cart
            </button>    
            <button onClick={() => removeFromCart(Inventory[id])}>
                remove
            </button> 
        </div>
    )
}

export default Tiles