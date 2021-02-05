import React from 'react'
import { Link } from 'react-router-dom'

const Tiles = (props) => {

    const {
        item: { name, img, price, id}
    } = props

    return (
        <div className='item-tile'>
            <Link to={`/store/${id}`}>
            <span>{name}</span> 
            <img src={img} alt={name}/> 
            <span>{price}</span>
            </Link>
            <button>
                add to cart
            </button>     
        </div>
    )
}

export default Tiles