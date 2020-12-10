import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/all.css';

import '../Styles/home.css'
import '../Styles/mobile.css'
import '../Styles/box-fire.css'
import { Helmet } from 'react-helmet';

//import Svg from '../Components/svg';
const Home = () => {  
    return (<main>
      <div className="main-container">
      <Helmet>
        <title>najmi-imad.com| Home</title>
      </Helmet>
     <div className="card2" style={{"position": "relative"}}>
       <div className="div-image">
         <img src="imgs/imad.jpg" className="my-image" />
       </div>
       <div className="my-description">
         <h3>Hi,</h3>
         <p>I'm Imad Najmi, I'm Web Developer, I am specialized in PHP, Symfony, Javascript, React and Python technologies.
        </p>
        <p>I am always learning more about my field to both stay current and to expand on my skills. </p>
        <button className="btn">
          more about me
        </button>    
       </div>
     </div>
       <div className="card1">
          <h3 className="artices">Recent Articles : </h3>
           <div className="post">
            <Link to="/">
          How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?</Link>
        </div>
        <div className="post">
           <Link to="/">Implementation of Mercure Protocol With Symfony and Api Platform bundle</Link>
        </div>
        <div className="post">
          <Link to="/">Create posts automatically on Facebook with Selenium and Python</Link>
        </div>
        <div style={{"position": "relative"}}>
          <button className="btn btn-success">
            more articles...
          </button>
        </div>
      </div>
       <div class="contact">
    <button id="btn">
       contact
    </button>
   </div>
   </div>
    </main>);
};

export default Home;
