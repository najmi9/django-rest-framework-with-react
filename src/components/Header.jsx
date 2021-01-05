import React, { } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';
const Header = () => {
    
    const handleClick = e =>{
        e.preventDefault();
        document.querySelector('.nav-links .custom-active').classList.remove('custom-active')
        e.currentTarget.classList.add('custom-active');
        const navLinks = document.querySelector(".nav-links");
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            const links = document.querySelectorAll(".nav-links li");
                links.forEach(link => {
                link.classList.toggle("fade");
            });
        }
    }

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
      <div className="hamburger" onClick={handleHamburgerClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="nav-links">
        <li  onClick={handleClick}  className="custom-nav-link custom-active">
            <Link  to="/" className="custom-nav-item">Home</Link>
        </li>
        <li  onClick={handleClick} className="custom-nav-link" >
            <Link to="/about-me" className="custom-nav-item">About</Link>
        </li>
        <li  onClick={handleClick} className="custom-nav-link">
            <Link to="/contact" className="custom-nav-item">Contact</Link>
        </li>
        <li  onClick={handleClick} className="custom-nav-link">
            <Link to="blog" className="custom-nav-item">Articles</Link>
        </li>
        <li  onClick={handleClick} className="custom-nav-link">
            <Link to="/my-works" className="custom-nav-item">Projects</Link>
        </li>
      </ul>
    </nav>

    );
};

export default Header;
