import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/footer.css';
const Footer = () => {

    return (
        <footer>
            <div className="footer-main">
                <div className="" style={{ 'justifySelf': 'center' }}>
                    <Link to="" title="Facebook"><i className="fab fa-facebook"></i></Link>
                    <Link to="" title="Github"> <i className="fab fa-github"></i></Link>
                    <Link to="" title="Youtube"> <i className="fab fa-youtube"></i></Link>
                    <Link to="" title="Linked-in"> <i className="fab fa-linkedin"></i></Link>
                </div>
                <div style={{ 'justifySelf': 'center' }}>
                    <p><i className="fas fa-phone-volume"></i> +212 07 62 95 17 42</p>
                    <p><i className="fas fa-envelope"></i> imadnajmi9@gmail.com</p>
                </div>
            </div>
            <div className="Copyrights fire">
                © 2020 Copyright: All Rightd Reserved
            </div>
        </footer>
    );
};

export default Footer;
