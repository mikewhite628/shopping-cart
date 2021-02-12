import React from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'

const Tiles = (props) => {

    const {
        item: { name, img, price, id} , defaultValue, increment, decrement 
    } = props

    return (
        <div className='item-tile' key={id}>
            <Link to={`/store/${id}`}>
            <span>{name}</span> 
            <img src={img} alt={name}/> 
            <span>${price.toLocaleString()}</span>
            </Link>
        </div>
    )
}

export default Tiles