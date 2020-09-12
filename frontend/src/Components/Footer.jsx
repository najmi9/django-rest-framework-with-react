import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (

<footer>

  <div className="">

    <ul className="">
      <li className="">
        <h5 className="">Register for free</h5>
      </li>
      <li className="m">
        <a href="#!" className="btn btn-outline-success">Sign up!</a>
      </li>
      <li>
          <Link to="github"> Github </Link>
          <Link to="youtube"> Youtube </Link>
      </li>
    </ul>
  </div>
 
  <div className="footer-copyright text-center">© 2020 Copyright:
    All Rightd Reserved
  </div>


</footer>
    );
};

export default Footer;
