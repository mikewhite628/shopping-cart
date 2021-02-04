import React from 'react'
import { Link } from 'react-router-dom'

function App() {
    const navStyle ={
        color: 'white',
        textDecoration: 'none'
    }
  return (
    <div className="App">
      <nav>
          <ul className='nav-links'>
              <li><Link style={navStyle} to='/'> Home </Link></li>
              <li><Link style={navStyle} to='/store'> Store </Link></li>
              <li><Link style={navStyle} to='/cart'> Cartpic </Link></li>
          </ul>
      </nav>
    </div>
  );
}

export default App;
