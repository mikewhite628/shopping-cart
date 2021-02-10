import React, { useState } from 'react'
import Tiles from './Tile'
import Inventory from './Inventory'

function Products(props) {
    const { addToCart, removeFromCart } = props

    const [ items, setItems] = useState(Inventory)

  return (
    <div className="products-container">
      {items.map((item) =>(
        <div className='products-item'>
          <Tiles item={item} key={item.id} addToCart={addToCart} removeFromCart={removeFromCart}  />
          <button onClick={() => addToCart(Inventory[item.id])}>
                add to cart
               
            </button>  
        </div>
      ))}
    </div>
  );
}

export default Products;