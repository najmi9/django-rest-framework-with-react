import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import '../styles/home.css';
import '../styles/anim-title.css';
import App from '../svg/bg';
import Man from '../svg/man';
import   animateTitle from  '../lib/anim-word';
import { Link } from 'react-router-dom';

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
                <div className="mansite">
                    <Man />
                </div>
                <div className="d-flex  align-items-center">
                    <h4 className="title">Hi, I’m IMAD NAJMI, I’m A FullStack Developer</h4>
                    {/* <Link to="/send-project-details" className="btn btn-success btn-lg">

                        Send Your Project Description
                    </Link> */}
                     
                </div>
                <div className="more">
                    <Link to="/about-me" title="More About Me" className="btn btn-sm">
                        <svg width="56" height="39" viewBox="0 0 56 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.6317 38.75C10.7213 38.7441 8.83486 38.5254 7.09583 38.1083C5.21502 37.6711 3.61259 36.9576 2.47993 36.053C1.34727 35.1484 0.732254 34.091 0.708328 33.0071V5.99292C0.732254 4.90897 1.34727 3.85156 2.47993 2.94699C3.61259 2.04241 5.21502 1.3289 7.09583 0.891667C9.25993 0.352563 11.6677 0.144922 14.0446 0.292406C16.4216 0.439889 18.6722 0.936565 20.54 1.72583L51.565 15.2329C52.7816 15.7437 53.7642 16.3927 54.4395 17.1315C55.1148 17.8703 55.4655 18.6798 55.4655 19.5C55.4655 20.3202 55.1148 21.1297 54.4395 21.8685C53.7642 22.6073 52.7816 23.2563 51.565 23.7671L20.54 37.2742C18.3036 38.2307 15.511 38.7518 12.6317 38.75ZM12.6317 6.66667V32.0125L42.1967 19.5L12.6317 6.66667Z" fill="#004C93"/>
                        </svg>  
                    </Link>
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