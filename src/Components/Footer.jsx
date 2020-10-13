import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './contact';

const Footer = () => {

    return (

<footer>



<div className="contact">
   <div> <i className="fas fa-phone"></i> :+212 07 62 95 17 42 </div>
   <div><i className="fas fa-envlope"></i> : imadnajmi9@gmail.com</div>
   <Contact />
</div>


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
