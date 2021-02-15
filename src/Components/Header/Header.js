import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import shoppingCart from '../../images/shopping-cart.png'

function Header(props) {

  const { getCartTotal } = props


    const navStyle ={
        color: 'white',
        textDecoration: 'none'
    }

    const cartStyle ={
      height: '40px',
      width: '40px',
      zIndex: '99',
      marginTop:'-35px',
      marginLeft: '8px'
    }

    const cartTotalStyle = {
      marginLeft: '20px',
      marginTop: '-60px',
      color: 'white',
      width: '25px',
      height: '25px',
      borderRadius: '30px',
      textAlign: 'center',
      backgroundColor: '#c41e3a',
      fontSize: '20px',
      zIndex: '1'
    }

  return (
    <div className="App">
      <nav>
          <ul className='nav-links'>
              <li><Link style={navStyle} to='/'> Home </Link></li>
              <li><Link style={navStyle} to='/store'> Store </Link></li>
              <li><Link style={navStyle} to='/cart'> <img src={shoppingCart} style={cartStyle} alt='cart' />  <div style={cartTotalStyle}> {getCartTotal} </div> </Link></li>
              
              
          </ul>
      </nav>
    </div>
  );
}

export default Header;
