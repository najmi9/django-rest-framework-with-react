import React from 'react';
import { Link } from 'react-router-dom';
import Media from '../components/course/media';
import { Helmet } from 'react-helmet';
import Logo from '../components/logo';
const Home = () => {
    return (
        <section className="d-flex justify-content-center align-items-center">
            <Helmet>
                <title>najmi-imad.com| Home</title>
            </Helmet>
            <div>
            <div className="row">
                <div className="col-lg-6">
                    <h4> Hi, I'am Imad NAJMI! </h4>
                </div>
                <div className="col-lg-6">
                    Symfony PHP Developer!
                    <Link className="btn btn-info" to="/about-me">
                        more about me
                    </Link>
                </div>
            </div>
            </div>
        </section>);
};

export default Home;

/*

<div>

                <div className="my-description">
                    <h3>Hi,</h3>
                    <p>
                        I'm Imad Najmi, I'm Web Developer, I am specialized in PHP, Symfony,
                         Javascript and React JS.
                    </p>
                    <p>I am always learning more about my field to both stay 
                        current and to expand on my skills. 
                    </p>
                    <Link className="btn btn-info" to="/about-me">
                        more about me
                    </Link>
                </div>
            </div>
            <div className="container">
                <h3 className="text-primary">Recent Articles : </h3>
                    <div className="mb-3">
                    <Link className="btn btn-primary" to="/react-markdown-syntaxhlighter">
                        How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?</Link>
                    </div>
                    <div className="mb-3">
                    <Link  className="btn btn-primary" to="/mercure-protocol-with-symfony">
                        Implementation of Mercure Protocol With Symfony and Api Platform bundle.</Link>
                     </div>
                    <div className="mb-3">
                    <Link className="btn btn-primary" to="/automate-publishing-posts-on-facbook">
                        Create posts automatically on Facebook with Selenium and Python.
                    </Link>

                    </div>
                <div style={{ "position": "relative" }}>
                    <Link to="/blog" className="button is-warning">
                        more articles...
          </Link>
                </div>
            </div>
**/