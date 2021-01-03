import React from 'react';
import { FACEBOOK, LINKED_IN, GITHUB, YOUTUBE } from '../Config';
const Footer = () => {

    return (
        <footer className="">
            <div className="">
                <a href={FACEBOOK} rel="noopener noreferrer" target="_blank" title="Facebook"><i className="fab fa-facebook"></i></a>
                <a href={GITHUB} rel="noopener noreferrer" target="_blank" title="Github"> <i className="fab fa-github"></i></a>
                <a href={YOUTUBE} rel="noopener noreferrer" target="_blank" title="Youtube"> <i className="fab fa-youtube"></i></a>
                <a href={LINKED_IN} rel="noopener noreferrer" target="_blank" title="Linked-in"> <i className="fab fa-linkedin"></i></a>
            </div>
            <div className="fire">
                © 2020 Copyright: All Rightd Reserved
            </div>

            <div className="">
                <p><i className="fas fa-phone-volume"></i> +212 07 62 95 17 42</p>
                <p><i className="fas fa-envelope"></i> imadnajmi9@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
