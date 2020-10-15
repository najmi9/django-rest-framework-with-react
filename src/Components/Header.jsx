import React from 'react';
import '../Styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <header>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo fire">Imad Najmi</label>
        <ul>
          <li><Link className="active" to="/">Home</Link></li>
          <li><Link to="/about-me">About</Link></li>
          <li><Link to="blog">Articles</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </header>

  );
};

export default Header;
