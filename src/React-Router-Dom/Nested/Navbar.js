import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
      <ul>
        <Link to='/'>About</Link>
        <Link to='contact'>Contact</Link>
      </ul>
    </div>
  )
}

export default Navbar