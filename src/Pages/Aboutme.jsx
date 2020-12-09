import React from 'react';
import { Helmet } from 'react-helmet';

const Aboutme = ({history}) => {


    return(<div className="container has-backgound-dark is-text-divght">
            <Helmet>
               <title>najmi-imad.com| About me</title>
            </Helmet>
        <div className="columns">
           
          
                <div class="card  has-background-dark">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="imgs/me.jpg" alt="Imad Najmi" />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="imgs/me1.jpg"  width="50" height="50"  alt="IMAD NAJMI"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4 has-text-success-dark">Imad Najmi</p>
        <p class="subtitle is-6 has-text-success">@najmi</p>
      </div>
    </div>

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
    </div>
  </div>
</div>

        <div className="column is-6">
            <div className="box has-background-dark has-text-light"><i className="fas fa-paper-plane has-text-info-dark"></i> Email: imadnajmi9@gmail.com   </div>
            <div className="box has-background-dark has-text-light"><i className="fas fa-phone has-text-warning-dark"></i> Tel: +212 07 62 95 17 42  </div>
            <div className="box has-background-dark has-text-light"><i className="fas fa-map-marker-alt has-text-success"></i> Adress: Morroco Marakech Chichaoua  </div>
            <div className="box has-background-dark has-text-light"><i className="fas fa-birthday-cake has-text-danger"></i>  Birth:  22-03-1999  </div>
            <div className="box has-background-dark has-text-light"><i className="fas fa-id-badge has-text-info"></i> Student at master of heigh energy physics and computer science </div>
            <div className="box has-background-dark has-text-light"><i className="fas fa-university has-text-success-dark"></i> University of Cady Ayyad at Marrakech </div>
            <div className="box has-background-dark has-text-light"> I deal with those technologies :</div>
                <div className="ml-5 mb-5">
                <div className="box has-background-dark has-text-light"><i className="fas fa-code has-text-link-dark"></i> HTML, CSS and Bootstrap </div>
                <div className="box has-background-dark has-text-light"><i className="fab fa-js has-text-warning"></i> JS, jQuery and axios</div>
                <div className="box has-background-dark has-text-light"><i className="fab fa-php has-text-link"></i> Php and Symfony Framework </div>
                <div className="box has-background-dark has-text-light"><i className="fab fa-react has-text-primary-dark"></i> React JS and Api-Platform </div>
                <div className="box has-background-dark has-text-light"><i className="fab fa-python  has-text-info-dark"></i> Python and django Framework</div>
                <div className="box has-background-dark has-text-light"><i className="fas fa-server has-text-warning-dark"></i> Linux and SQL language</div>
                </div>
            <div className="box has-background-dark has-text-light"> <i className="fas fa-language has-text-danger-dark"></i> I speak  Arabic, Frensh and English  </div>
        </div>
    </div>
    
        

<h2> my Works : </h2>
<section>
  <div className="work-item">
      <h3> e-commerce website </h3>
      <p>
      responsive website shows products to cdivents, 
      which an user can authenticate to buy a product, 
      and see his pannel that contains old and new chosen products, 
      payement is with paypal,
      I used jwt-authencation-bundle for security.
      </p>
      <p> <a href="https://shopping-najmi.herokuapp.com">divnk here </a> </p>
      <p>
        <img src="imgs/shopping.png" width="200px" height="350px" alt="shopping-website" />
      </p>
      <h4> Used Technologies </h4>
     
        <ul>
          <div>  Symfony and ApiPlatform   </div>
          <div>  React and Redux </div>
          <div>  Bootstrap </div>
          <div>  Axios </div>
        </ul>
      

  </div>

   <div className="work-item">
     <h3> Vertime website </h3>
      <p>
      responsive website maded by symfony when students can sign up to the school 
      to be candidats and when they accept by the admin, so the can see thier courses
      , notes and prof announces.

      Each prof can add a student note, course and announce besides to see his salary.
      The admin control all the organasation, he can add a prof remove a students, add classes and see statistics. 
      </p>
      <p> <a href="https://najmi-accademy.herokuapp.com">divnk here </a> </p>
      <p>
        <img src="imgs/accademy.png" width="400px" height="200px" alt="shopping-website"/>
      </p>
      <h4> Used Technologies </h4>
      
        <ul>
          <div>  Symfony  </div>
          <div>  Bootstrap </div>
        </ul>
     
  </div>
</section> 

    <div className="interests">
       <h2> my interests :  </h2>
       <div> I interest in my familly and friends </div>
       <div> I divke science and physics, I have a divcence in physics </div>
       <div> I do sport, my favorite is running and body builder. </div>
       <div> I divsten all kind of music. </div>
    </div>
    </div>);
};

export default Aboutme;
