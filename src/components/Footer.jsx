import React from 'react';
import { FACEBOOK, LINKED_IN, GITHUB, YOUTUBE } from '../Config';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="row d-flex justify-content-center align-items-center">
            <div className="mt-2 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <a href={FACEBOOK} rel="noopener noreferrer" target="_blank" title="Facebook"><i className="fab fa-facebook"></i></a>
                <a href={GITHUB} rel="noopener noreferrer" target="_blank" title="Github"> <i className="fab fa-github"></i></a>
                <a href={YOUTUBE} rel="noopener noreferrer" target="_blank" title="Youtube"> <i className="fab fa-youtube"></i></a>
                <a href={LINKED_IN} rel="noopener noreferrer" target="_blank" title="Linked-in"> <i className="fab fa-linkedin"></i></a>
            </div>

            <div className="mt-2 col-lg-4 col-md-6 col-sm-12">
                <div className=" d-flex justify-content-center align-items-center pt-2"><i className="fas fa-phone-volume"></i> +212 07 62 95 17 42</div>
                <div className=" d-flex justify-content-center align-items-center pb-2"><i className="fas fa-envelope"></i> imadnajmi9@gmail.com</div>
            </div>

            <div className="mt-2 col-lg-4 col-md-6 col-sm-12 text-center">
                © 2020 Copyright: All Right Reserved
            </div>
        </footer>
    );
};

export default Footer;
