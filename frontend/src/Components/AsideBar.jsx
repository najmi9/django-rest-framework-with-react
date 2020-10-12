import React from 'react';
import { Link } from 'react-router-dom';

const AsideBar = () => {
    return (
       <div  className="list-group">
           	<Link to="/django-demo-app"  
           		className="list-group-item list-group-item-action btn-link">
           		Explain Basic Django App
           	</Link>

              <Link to="/use-open-ssh-connection"  
              className="list-group-item list-group-item-action btn-link">
               What is SSH, How it's
                work, How we can use it and How to secure a open SSH connection?
            </Link> 

           	<Link to="/math-for-developers" 
           		className="list-group-item list-group-item-action">
           		 What are the math concepts  I should know it as a developer ?
           	 </Link>

           	<Link to="/mercure-protocol-with-symfony" 
           		className="list-group-item list-group-item-action">
           	 	How to use Mercure Protocol with Symfony and API Platform ?
           	 </Link>

           	<Link to="/node-express-app" 
           		className="list-group-item list-group-item-action">
           		Hello World Express application using Sequelize ? 
           	</Link> 

           	<Link to="/symfony-react" 
           		className="list-group-item list-group-item-action"> 
           		How to use Symfony and React in the same project ?
           	</Link> 

              <Link to="/web-scraping" 
              className="list-group-item list-group-item-action"> 
              Web Scraping and Automation with python: Parctical examples
            </Link> 

             <Link to="/react-markdown-syntaxhlighter" 
              className="list-group-item list-group-item-action"> 
              How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?
            </Link> 

              <Link to="/automate-publishing-posts-on-facbook" 
              className="list-group-item list-group-item-action"> 
                Automate publishing posts on Facebook with Selenium and Python
            </Link> 
       </div> 
    );
};

export default AsideBar;
