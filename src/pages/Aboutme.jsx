import React from 'react';
import { Helmet } from 'react-helmet';
import Media from '../components/course/media';
import Footer from '../components/Footer';
import '../styles/about.css';

const Aboutme = () => {
    const techs = [
        { id: 1, icon: 'fas fa-code text-warning', name:'HTML, CSS and Bootstrap.'},
        { id: 2, icon: 'fab fa-js text-danger', name:'JS, jQuery and axios.'},
        { id: 3, icon: 'fab fa-php text-primary', name:'Php and Symfony Framework.'},
        { id: 4, icon: 'fas fa-database text-secondary',  name:'SQL and Doctrine ORM.'},
        { id: 5, icon: 'fab fa-react text-info',name:'React JS and Api-Platform.'},
        { id: 6, icon: 'fas fa-robot text-warning',  name:'Redux, Hooks robot3.'},
        { id: 7, icon: 'fas fa-seedling text-success', name:'Twig and Webpack Encore.'},
        { id: 8, icon: 'fas fa-server text-primary', name:'Linux and Redis server.'}
    ];
    
    return (<>
    <section className="d-flex justify-content-center align-items-center">
        <Helmet>
            <title>najmi-imad.com| About me</title>
        </Helmet>
        <div className="row container">
            <div className="col-lg-6">
                <div>
                    <div className="bg-white p-2 my-3 text-success font-weight-bolder h4">
                        About Me :
                    </div>
                    <div className="card-body">
                        <div className="row d-flex justify-conetent-center align-items-center">
                            <div className="col-md-4">
                                <Media media="imgs/me.jpg" className="rounded-circle" width="150" height="150" alt="Imad Najmi" />
                            </div>
                            <div className="col-md-8">
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
                    </div>
                    <div className="card-footer">
                        <div>
                           <i className="fas fa-arrow-right"></i>  Birth:  22-03-1999  
                        </div>
                        <div>
                            <i className="fas fa-arrow-right"></i> Student at master of heigh energy physics and computer science.
                        </div>
                        
                        <div>
                            <i className="fas fa-arrow-right"></i> I speak  Arabic, Frensh and English
                        </div>
                        <div>
                            <i className="fas fa-arrow-right"></i>  University of Cady Ayyad at Marrakech 
                        </div>
                        <div>
                            <i className="fas fa-arrow-right"></i> Adress: Morroco Marakech Chichaoua  
                        </div>
                        <div>
                            <i className="fas fa-arrow-right"></i> Email: imadnajmi9@gmail.com   
                        </div>
                        <div>
                            <i className="fas fa-arrow-right"></i> Tel: +212 07 62 95 17 42  
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-6">
                <h4 className="bg-white p-2 my-3 text-success font-weight-bolder"> My knowledge is in these technologies :</h4>
                <div className="skills-container container font-weight-bolder">
                    { techs.map(t => (
                        <div key={t.id} className="skills shadow-lg p-3 mb-2 bg-white rounded">
                            <i className={t.icon}></i> {t.name} 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>);
};

export default Aboutme;
