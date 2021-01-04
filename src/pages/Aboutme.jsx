import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Media from '../components/course/media';

const Aboutme = ({ history }) => {

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }



    return (<section className="d-flex justify-content-center align-items-center">
        <Helmet>
            <title>najmi-imad.com| About me</title>
        </Helmet>
        <div className="row">
            <div class="col-lg-6">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <Media media="imgs/me.jpg" width="150" height="150" alt="Imad Najmi" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content has-text-white-bis">
                        Hi, I am IMAD NAJMI, I am a web developer, my favorite framworks are Symfony php
                        framework and React JS, I use Symfony to create my back-end, I make Restful APIs
                        using API-PLATFORM framework and React Admin to generate amazing admin interface
                        for my clients, I am dynamic, I learn quickly, I love work in teams and I create a
                        responsive websites
                        using bootstrap and other css frameworks depending on the  needs of the cdivents.
                        <p>
                            You can see my Upwork profile
                            <a href="https://www.upwork.com/freelancers/~01a391792ec0fb762e">@najmi.</a>
                            for more informations.
                        </p>
                        <br />
                        <time datetime="2016-1-1" className="has-text-primary">11:09 PM - 1 Mar 2020</time>
                        
                      <div className="shadow-lg bg-white"><i className="fas fa-birthday-cake"></i>  Birth:  22-03-1999  </div>
                        <div className="shadow-lg bg-white"><i className="fas fa-id-badge"></i> Student at master of heigh energy physics and computer science </div>
                        
                        <div className="box has-background-dark has-text-light">
                            <i className="fas fa-language has-text-danger-dark"></i>
                            I speak  Arabic, Frensh and English
                        </div>
                    </div>
                    <div className="box has-background-dark has-text-light">
                        <i className="fas fa-university has-text-success-dark"></i> 
                        University of Cady Ayyad at Marrakech 
                    </div>
                    <div className="shadow-lg bg-white"><i className="fas fa-paper-plane"></i> Email: imadnajmi9@gmail.com   </div>
                    <div className="shadow-lg bg-white"><i className="fas fa-phone"></i> Tel: +212 07 62 95 17 42  </div>
                    <div className="shadow-lg bg-white"><i className="fas fa-map-marker-alt"></i> Adress: Morroco Marakech Chichaoua  </div>
                </div>
            </div>

            <div className="col-lg-6"><div className="shadow-lg bg-white"> I deal with those technologies :</div>
                <div className="skills-container">
                    <div className="skills"><i className="fas fa-code"></i> HTML, CSS and Bootstrap </div>
                    <div className="skills"><i className="fab fa-js"></i> JS, jQuery and axios</div>
                    <div className="skills"><i className="fab fa-php"></i> Php and Symfony Framework </div>
                    <div className="skills"><i className="fab fa-react"></i> React JS and Api-Platform </div>
                    <div className="skills"><i className="fab fa-python"></i> Python and django Framework</div>
                    <div className="skills"><i className="fas fa-server"></i> Linux and SQL language</div>
                </div>
            </div>
        </div>
    </section>);
};

export default Aboutme;
