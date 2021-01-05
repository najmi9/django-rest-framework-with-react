import React from 'react';
import { Helmet } from 'react-helmet';
import Media from '../components/course/media';

const Aboutme = ({ history }) => {

    return (
    <section className="d-flex justify-content-center align-items-center">
        <Helmet>
            <title>najmi-imad.com| About me</title>
        </Helmet>
        <div className="row">
            <div class="col-lg-6">
                <div className="card container">
                    <div className="shadow-lg bg-white p-2 my-3 text-success font-weight-bolder h4">
                        About Me :
                    </div>
                    <div className="card-body">
                        <div className="card-image mb-2">
                            <Media media="static/imgs/me.jpg" className="rounded-circle" width="150" height="150" alt="Imad Najmi" />
                        </div>
                        <div className="card-text bg-light rounded p-2">
                                Hi, I am IMAD NAJMI, I am a web developer, my favorite framworks are Symfony php
                            framework and React JS, I use Symfony to create my back-end, I make Restful APIs
                            using API-PLATFORM framework and React Admin to generate amazing admin interface
                            to my clients, I am dynamic, I learn quickly, I love work in teams and I create a
                            responsive websites
                            using bootstrap and other css frameworks depending on the  needs of the clients.
                            <p>
                                You can see my Upwork profile
                                <a href="https://www.upwork.com/freelancers/~01a391792ec0fb762e">@najmi.</a>
                                for more informations.
                            </p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="bg-white">
                           <i style={{'color': '#00ffff'}} className="fas fa-birthday-cake"></i> Birth:  22-03-1999  
                        </div>
                        <div className="bg-white">
                            <i className="text-success fas fa-id-badge"></i> Student at master of heigh energy physics and computer science.
                        </div>
                        
                        <div className="bg-white">
                            <i className="text-danger fas fa-language"></i>
                            I speak  Arabic, Frensh and English
                        </div>
                        <div className="bg-white">
                            <i className="fas fa-university" style={{ 'color':'#9932cc' }}></i> 
                            University of Cady Ayyad at Marrakech 
                        </div>
                        <div className="bg-white">
                            <i className="text-warning fas fa-paper-plane"></i> Email: imadnajmi9@gmail.com   
                        </div>
                        <div className="bg-white">
                            <i style={{"color": '#808000'}} className="fas fa-phone"></i> Tel: +212 07 62 95 17 42  
                        </div>
                        <div className="bg-white">
                            <i className="text-primary fas fa-map-marker-alt"></i> Adress: Morroco Marakech Chichaoua  
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <h4 className="shadow-lg bg-white p-2 my-3 text-success font-weight-bolder"> My knowledge is in these technologies :</h4>
                <div className="skills-container container font-weight-bolder">
                    <div className="skills shadow-lg p-3 mb-2 bg-white rounded">
                        <i className="fas fa-code text-warning"></i> HTML, CSS and Bootstrap. 
                    </div>
                    <div className="skills shadow-lg p-3 mb-2 bg-white rounded">
                        <i className="fab fa-js text-danger"></i> JS, jQuery and axios.
                    </div>
                    <div className="skills shadow-lg p-3 mb-2 bg-white rounded">
                        <i className="fab fa-php text-primary"></i> Php and Symfony Framework. 
                    </div>
                    <div className="skills shadow-lg p-3 mb-2 bg-white rounded">
                        <i className="fas fa-database text-secondary"></i> SQL and Doctrine ORM.
                    </div>
                    <div className="skills shadow-lg p-3 mb-2 bg-white rounded">
                        <i className="fab fa-react text-info"></i> React JS and Api-Platform. 
                    </div>
                    <div className="skills shadow-lg p-3 mb-2 bg-white rounded">
                        <i style={{ 'color': '#ff1493' }} className="fas fa-robot"></i> Redux, Hooks robot3. 
                    </div>
                    <div className="skills shadow-lg p-3 mb-2 bg-white rounded">
                        <i className="fas fa-seedling text-success"></i> Twig and Webpack Encore.
                    </div>
                    <div className="skills shadow-lg p-3 mb-2 bg-white rounded">
                        <i className="fas fa-server text-primary"></i> Linux and Redis server.
                    </div>
                </div>
            </div>
        </div>
    </section>);
};

export default Aboutme;
