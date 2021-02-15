import React, { useState, useEffect } from 'react'
import Inventory from '../Store/Inventory';
import Tiles from '../Store/Tile';
import Checkout from '../Cart/Checkout'


function Cart(props) {

  const { cart, removeFromCart, clearCart, total, quantity } = props

  const [ show, setShow ] = useState(false)
  const openCheckout = () => setShow(true)
  const closeCheckout = () => setShow(false)

  const styleTotal = {
    textAlign: 'center',
    marginBottom: '10px'
  }

  const styleQuantity = {
    marginBottom: '20px'
  }

  const styleRemove = {
    marginTop: '20px',
    marginLeft: '-15px',
    height: '30px',
    width: '100px',
    backgroundColor: '#FF0000',
    color: 'white',
    border: 'none'

  }

  const styleCheckOut = {
    height: '30px',
    width: '100px',
    backgroundColor: '#24a0ed',
    color: 'white',
    border: 'none'
  }

  const styleEmpty = { 
    alignSelf: 'center',
    height: '30px',
    width: '100px',
    backgroundColor: '#FF0000',
    color: 'white',
    border: 'none'
  }

  


  return (
    <div>
      {!show && <button onClick={openCheckout} style={styleCheckOut}> checkout </button>}
      <Checkout closeCheckout={closeCheckout}  show={show} />
      <div style={styleTotal}> Total: ${total.toLocaleString()} </div>
    <div className="products-container">
      {cart.map((item) =>(
        <div className='products-item'>
          <div className='quantity' style={styleQuantity}> Quantity: {item.quantity}</div>
          <Tiles item={item} key={item.id} />
          <button onClick={() => removeFromCart(Inventory[item.id])} style={styleRemove}>
                remove
            </button> 
        </div>
      ))}
      
      <button style={styleEmpty} onClick={clearCart} > Empty Cart </button>
    </div>
    
    </div>
  );
}

export default Cart;
