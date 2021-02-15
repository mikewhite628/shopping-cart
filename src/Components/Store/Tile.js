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
            <img src={img} alt={name} className='guitar-img'/> 
            <br />
            <div className='item-info'>
            <span>{name}</span> 
            <br />
            <br />
            <span style={priceStyle}>${price.toLocaleString()}</span>
            </div>
            </Link>
        </div>
    )
}

export default Tiles