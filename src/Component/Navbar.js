import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'

const Navbar = () => {
  return (
    <div className='header'>
      <Link to='/'> <h1>Foresight Technologies</h1></Link>
      <ul className='navbar-menu'>
        <li><Link to="/">Home</Link > </li>
        <li><Link to="/about">About</Link > </li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact us</Link > </li>
      </ul>
    </div>
  )
}

export default Navbar