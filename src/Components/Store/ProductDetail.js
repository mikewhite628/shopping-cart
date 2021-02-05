import React from 'react'
import Inventory from './Inventory'

const Details = ({ match }) => {
console.log(match)
    return (
        <div className='item-tile'>
            <h1>{Inventory[match.params.id].name}</h1> 
            <img src={Inventory[match.params.id].img} /> 
            <div>{Inventory[match.params.id].description}</div> 
            <div>{Inventory[match.params.id].price}</div>
            <button>
                add to cart
            </button>
        </div>
    )
}

export default Details 