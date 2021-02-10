import React from 'react'
import Inventory from '../Store/Inventory';
import Tiles from '../Store/Tile';


function Cart(props) {

  const { cart, removeFromCart, clearCart, total, quantity } = props

  const styleTotal = {
    textAlign: 'center',
    marginBottom: '10px'
  }



  return (
    <div>
      <div style={styleTotal}> Total: ${total.toLocaleString()} </div>
    <div className="products-container">
      {cart.map((item) =>(
        <div className='products-item'>
          <Tiles item={item} key={item.id} />
          {item.quantity}
          <button onClick={() => removeFromCart(Inventory[item.id])}>
                remove
            </button> 
        </div>
      ))}
      
    
    </div>
    <button onClick={clearCart}> clear cart </button>
    </div>
  );
}

export default Cart;
