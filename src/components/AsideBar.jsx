import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/blog.css';

const AsideBar = () => {
    return (
        <div className="row d-felx justify-content-center align-items-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleTitle 
                    src="imgs/blog/django-react.jpeg"
                    to="/django-demo-app"
                    title="Django Rest Framework ApiView and React JS."
                />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleTitle 
                src="imgs/blog/ssh.png"
                to="/use-open-ssh-connection"
                title="What is SSH, How it's work, How we can use it and How to secure a open SSH connection?"
                />
            </div>

            {/* <div className="rounded bg-light text-primary  p-2 mb-2">
                <Link to="/math-for-developers"
                    className="custom-link">
                    What are the math concepts  I should know it as a developer ?
               	 </Link>
            </div> */}
            <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleTitle 
                src="imgs/blog/mercure.jpeg"
                to="/mercure-protocol-with-symfony"
                title="How to use Mercure Protocol with Symfony and API Platform ?"
                />
            </div>
            {/* <div className="rounded bg-light text-primary  p-2 mb-2">
                <Link to="/node-express-app"
                    className="custom-link">
                    Hello World Express application using Sequelize ?
               	</Link>
            </div> */}
            <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleTitle 
                src="imgs/blog/s5-react.png"
                to="/symfony-react"
                title="How to use Symfony and React in the same project ?"
                />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleTitle 
                src="imgs/blog/scraper.png"
                to="/web-scraping"
                title="Web Scraping and Automation with python: Parctical examples."
                />
            </div>
           
            <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleTitle 
                src="imgs/blog/syntaxic.png"
                to="/react-markdown-syntaxhlighter"
                title="How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?"
                />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleTitle 
                src="imgs/blog/fc-scraping.jpeg"
                to="/automate-publishing-posts-on-facbook"
                title="Automate publishing posts on Facebook with Selenium and Python."
                />
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <ArticleTitle 
                src="imgs/blog/doctrine-cache/doctrine_cache.png"
                to="/doctrine-orm-second-level-cache"
                title="Doctrine ORM: Second Level Cache."
                />
            </div>
        </div>
    );
};

const ArticleTitle = ({to, src, title}) => {
    return(
        <div className="card">
            <div className="card-header text-center">
                <img src={"static/"+src} alt={title} className="blog-imge" />
            </div>
            <div className="card-body">
                <div className="card-text">
                    <Link to={to} className="custom-link">{title}</Link>  
                </div>
            </div>
        </div>
    );
}

export default AsideBar;
