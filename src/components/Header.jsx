import React, { } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
const Header = () => {
    
    const handleClick = e =>{
        e.preventDefault();
        document.querySelector('.nav-links .custom-active').classList.remove('custom-active')
        e.currentTarget.classList.add('custom-active');
    }

    const x = (
        <header>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
                <i className="fas fa-bars"></i>
            </label>
            <label className="logo fire">Imad Najmi</label>
            <ul>
                <li><Link className="active js-link" to="/" onClick={handleClick}>Home</Link></li>
                <li><Link to="/about-me" className="js-link" onClick={handleClick}>About</Link></li>
                <li><Link to="blog" className="js-link" onClick={handleClick}>Articles</Link></li>
                <li><Link to="/contact" className="js-link" onClick={handleClick}>Contact</Link></li>
                <li><Link to="/my-works" className="js-link" onClick={handleClick}>Works</Link></li>
            </ul>
        </header>

    );

    const handleHamburgerClick = e => {
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        navLinks.classList.toggle("open");
            links.forEach(link => {
            link.classList.toggle("fade");
        });
    }

    return(
        <nav>
      <div class="hamburger" onClick={handleHamburgerClick}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <ul class="nav-links">
        <li  onClick={handleClick}  class="custom-nav-link custom-active"><Link  to="/" class="custom-nav-item">Home</Link></li>
        <li  onClick={handleClick} class="custom-nav-link" ><Link to="/about-me" class="custom-nav-item">About</Link></li>
        <li  onClick={handleClick} class="custom-nav-link"><Link to="/contact" class="custom-nav-item">Contact</Link></li>
        <li  onClick={handleClick} class="custom-nav-link"><Link to="blog" class="custom-nav-item">Articles</Link></li>
        <li  onClick={handleClick} class="custom-nav-link"><Link to="/my-works" class="custom-nav-item">Projects</Link></li>
      </ul>
    </nav>

    );
};

export default Header;
