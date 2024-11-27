import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../logo bg removed (3).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="container nav">
      <div className="logo">
        <img src={logo} alt="NXT LVL" />
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
     
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li className='font9'>
          
          <Link to="/" className="selected">
            Home
          </Link>
        </li>
        <li className='font9'>
          <Link to="/Service">Service</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
      
      <div className="cart-icon">
        <Link to="/Cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          {getCartCount() > 0 && (
            <span className="cart-count">{getCartCount()}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
