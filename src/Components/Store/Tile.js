import React from 'react'
import { Link } from 'react-router-dom'
import Inventory from './Inventory'

const Tiles = (props) => {

    const {
        item: { name, img, price, id} , defaultValue, increment, decrement 
    } = props

    const linkStyle = {
        textDecoration: 'none',
        fontSize: '18px'
    }

    const priceStyle = {
        marginLeft: '-10px'
    }

    return (
        <div className='item-tile' key={id}>
            <Link to={`/store/${id}`} style={linkStyle}>
            <span>{name}</span> 
            <img src={img} alt={name} className='guitar-img'/> 
            <br />
            <span style={priceStyle}>${price.toLocaleString()}</span>
            </Link>
        </div>
    )
}

export default Tiles