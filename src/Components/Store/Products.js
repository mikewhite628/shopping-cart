import React, { useState } from 'react'
import Tiles from './Tile'
import Inventory from './Inventory'

function Products(props) {
    const { addToCart } = props

    const [ items, setItems] = useState(Inventory)

  return (
    <div className="App">
      {items.map((item) =>(
        <div>
          <Tiles item={item} key={item.id} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
}

export default Products;