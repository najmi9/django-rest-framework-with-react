import React from 'react';
import { Link } from 'react-router-dom';
import Media from '../Components/course/media';
import Logo from '../Components/logo';

import { Helmet } from 'react-helmet';

//import Svg from '../Components/svg';
const Home1 = () => {  
    return (<main>
      <div className="main-container">
      <Helmet>
        <title>najmi-imad.com| Home</title>
      </Helmet>
     <div className="card2" style={{"position": "relative"}}>
       <div className="div-image">
         <Media media="imgs/imad.jpg" className="my-image" />
       </div>
       <div className="my-description">
         <h3>Hi,</h3>
         <p>I'm Imad Najmi, I'm Web Developer, I am specialized in PHP, Symfony, Javascript, React and Python technologies.
        </p>
        <p>I am always learning more about my field to both stay current and to expand on my skills. </p>
        <Link className="button is-info" to="/about-me">
          more about me
        </Link>    
       </div>
     </div>
       <div className="card1 container">
          <h3 className="artices">Recent Articles : </h3>
           <div className="post">
            <Link to="/react-markdown-syntaxhlighter">
          How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?</Link>
        </div>
        <div className="post">
           <Link to="/mercure-protocol-with-symfony">Implementation of Mercure Protocol With Symfony and Api Platform bundle</Link>
        </div>
        <div className="post">
          <Link to="/automate-publishing-posts-on-facbook">Create posts automatically on Facebook with Selenium and Python</Link>
        </div>
        <div style={{"position": "relative"}}>
          <Link  to="/blog" className="button is-warning">
            more articles...
          </Link>
        </div>
      </div>
   </div>
    </main>);
};

const Home = () => {
   return(
    <div>
      <Logo />
    </div>
   );
}

export default Home;
