import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import '../styles/home.css';
import '../styles/anim-title.css';
import App from '../svg/bg';
import Man from '../svg/man';
import   animateTitle from  '../lib/anim-word';

ReactGA.initialize('641476067204-k3tihppcn56nnolueestq7qn0seu2pbh.apps.googleusercontent.com');

//TODO, google analytics
ReactGA.pageview('/about-me');

const Home = () => {

    useEffect(() => {
        animateTitle('.title');
    }, []);

    return (
        <>
            <section className="d-flex justify-content-center align-items-center" style={{position:'relative'}}>
                <Helmet>
                    <title>najmi-imad.com| Home</title>
                </Helmet>
                <div style={{maxHeight: 600 + 'px', maxWidth: 600+ 'px'}} className="mansite">
                            <Man />
                       </div>
                <div class="container d-flex justify-content-center align-items-center">
                <h4 class="title">Hi, I’m IMAD NAJMI, I’m A FullStack Developer</h4>
                
                </div>
            </section>
            <footer>
                <App />
            </footer>
        </>);
};

export default Home;

/**
 *      <div class="col-md-6">
                       <div style={{maxHeight: 600 + 'px', maxWidth: 600+ 'px'}}>
                            <Man />
                       </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                            
                    </div> 
 */