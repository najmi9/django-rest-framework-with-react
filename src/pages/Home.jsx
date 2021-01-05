import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../styles/home.css';

const Home = () => {
    return (
        <section className="d-flex justify-content-center align-items-center">
            <Helmet>
                <title>najmi-imad.com| Home</title>
            </Helmet>
            <div>
            <div className="container">
                <div className="my-name">
                    <svg width="598" height="191" viewBox="0 0 598 191" fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path id="imad" d="M54.8822 89.84V146H41.2022V89.84H54.8822Z" fill="orange"/>
                            <path id="imad" d="M128.396 89.84V146H114.716V112.32L102.156 146H91.1159L78.4759 112.24V146H64.7959V89.84H80.9559L96.7159 128.72L112.316 89.84H128.396Z" fill="#0C0997"/>
                            <path id="imad" d="M173.193 136.08H152.233L148.873 146H134.553L154.873 89.84H170.713L191.033 146H176.553L173.193 136.08ZM169.673 125.52L162.713 104.96L155.833 125.52H169.673Z" fill="#0C0997"/>
                            <path id="imad" d="M218.258 89.84C224.178 89.84 229.351 91.0133 233.778 93.36C238.204 95.7067 241.618 99.0133 244.018 103.28C246.471 107.493 247.698 112.373 247.698 117.92C247.698 123.413 246.471 128.293 244.018 132.56C241.618 136.827 238.178 140.133 233.698 142.48C229.271 144.827 224.124 146 218.258 146H197.218V89.84H218.258ZM217.378 134.16C222.551 134.16 226.578 132.747 229.458 129.92C232.338 127.093 233.778 123.093 233.778 117.92C233.778 112.747 232.338 108.72 229.458 105.84C226.578 102.96 222.551 101.52 217.378 101.52H210.898V134.16H217.378Z" fill="#0C0997"/>
                            <path id="imad" d="M322.536 146H308.856L285.976 111.36V146H272.296V89.84H285.976L308.856 124.64V89.84H322.536V146Z" fill="#0C0997"/>
                            <path id="imad" d="M367.412 136.08H346.452L343.092 146H328.772L349.092 89.84H364.932L385.252 146H370.772L367.412 136.08ZM363.892 125.52L356.932 104.96L350.052 125.52H363.892Z" fill="#0C0997"/>
                            <path id="imad" d="M426.637 89.84V128.08C426.637 134 424.957 138.56 421.597 141.76C418.29 144.96 413.81 146.56 408.157 146.56C402.237 146.56 397.49 144.88 393.917 141.52C390.343 138.16 388.557 133.387 388.557 127.2H402.157C402.157 129.547 402.637 131.333 403.597 132.56C404.557 133.733 405.943 134.32 407.757 134.32C409.41 134.32 410.69 133.787 411.597 132.72C412.503 131.653 412.957 130.107 412.957 128.08V89.84H426.637Z" fill="#0C0997"/>
                            <path id="imad" d="M501.287 89.84V146H487.607V112.32L475.047 146H464.007L451.367 112.24V146H437.687V89.84H453.847L469.607 128.72L485.207 89.84H501.287Z" fill="#0C0997"/>
                            <path id="imad" d="M524.804 89.84V146H511.124V89.84H524.804Z" fill="orange"/>
                        </g>
                    </svg>
                </div>
                <div className="my-description">
                        Symfony PHP Developer!
                </div>
                <div className="about-me">
                    <Link className="btn about-me-btn" to="/about-me">
                        More about me
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