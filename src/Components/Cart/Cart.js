import React from 'react'
import Tiles from '../Store/Tile';


function Cart(props) {

  const { cart, addToCart, removeFromCart, clearCart, total } = props



  return (
    <div className="App">
      Cart Component !!
      {cart.map((item) =>(
        <div>
          <Tiles item={item} key={item.id} addToCart={addToCart} removeFromCart={removeFromCart} />
        </div>
      ))}
      <div> Total: ${total.toLocaleString()} </div>
    <button onClick={clearCart}> clear cart </button>
    </div>
  );
}

export default Cart;
