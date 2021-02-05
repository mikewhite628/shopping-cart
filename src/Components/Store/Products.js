import React, { useState } from 'react'
import Tiles from './Tile'
import Inventory from './Inventory'

function Products() {

    const [ items, setItems] = useState(Inventory)

  return (
    <div className="App">
      {items.map((item) =>(
        <div>
          <Tiles item={item} key={item.id} />
        </div>
      ))}
    </div>
  );
}

export default Products;