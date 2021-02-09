import React from 'react'
import Tiles from '../Store/Tile';


function Cart(props) {

  const { cart, addToCart, removeFromCart } = props



  return (
    <div className="App">
      Cart Component !!
      {cart.map((item) =>(
        <div>
          <Tiles item={item} key={item.id} addToCart={addToCart} removeFromCart={removeFromCart} />
        </div>
      ))}
    </div>
  );
}

export default Cart;
