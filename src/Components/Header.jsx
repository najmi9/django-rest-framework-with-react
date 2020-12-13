import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    const handleClick = e =>{
        document.querySelectorAll('.js-link').forEach(e => {
            e.classList.remove('active');
        });
        e.currentTarget.classList.add('active');
    }

    return (
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
};

export default Header;
