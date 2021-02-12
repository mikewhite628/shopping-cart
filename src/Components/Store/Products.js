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
          <Tiles item={item} key={item.id} addToCart={addToCart} />
        </div>
        
      ))}
      
    </div>
  );
}

export default Products;