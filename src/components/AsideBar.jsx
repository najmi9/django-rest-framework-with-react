import React from 'react';
import { Link } from 'react-router-dom';

const AsideBar = () => {
    return (
        <div className="">
            <Link to="/django-demo-app"
                className="box has-background-dark has-text-warning">
                Explain Basic Django App
           	</Link>

            <Link to="/use-open-ssh-connection"
                className="box has-background-dark has-text-warning">
                What is SSH, How it's
                work, How we can use it and How to secure a open SSH connection?
            </Link>

            <Link to="/math-for-developers"
                className="box has-background-dark has-text-warning">
                What are the math concepts  I should know it as a developer ?
           	 </Link>

            <Link to="/mercure-protocol-with-symfony"
                className="box has-background-dark has-text-warning">
                How to use Mercure Protocol with Symfony and API Platform ?
           	 </Link>

            <Link to="/node-express-app"
                className="box has-background-dark has-text-warning">
                Hello World Express application using Sequelize ?
           	</Link>

            <Link to="/symfony-react"
                className="box has-background-dark has-text-warning">
                How to use Symfony and React in the same project ?
           	</Link>

            <Link to="/web-scraping"
                className="box has-background-dark has-text-warning">
                Web Scraping and Automation with python: Parctical examples
            </Link>

            <Link to="/react-markdown-syntaxhlighter"
                className="box has-background-dark has-text-warning">
                How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?
            </Link>

            <Link to="/automate-publishing-posts-on-facbook"
                className="box has-background-dark has-text-warning">
                Automate publishing posts on Facebook with Selenium and Python
            </Link>
        </div>
    );
};

export default AsideBar;
