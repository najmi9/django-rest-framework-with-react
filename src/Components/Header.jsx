import React from 'react';
import '../Styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Coding with Najmi</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/"> <i className="fas fa-home"></i> Home <span className="sr-only">
        (current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-me"><i className="fas fa-user"></i>About Me</Link>
      </li>

       <li className="nav-item">
        <Link className="nav-link" to="/login"><i className="fas fa-sign-in-alt"></i>Login</Link>
      </li>

        <li className="nav-item">
        <Link className="nav-link" to="/blog"><i className="fas fa-blogger"></i>Blogs</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/courses"><i className="far fa-books"></i>Courses</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search"
       placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i> Search</button>
    </form>
  </div>
</nav>
    );
};

export default Header;
