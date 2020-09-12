import React from 'react';
import { Helmet } from 'react-helmet';

const Aboutme = ({history}) => {

     function back() {
       history.goBack()
     }

     function forward() {
      history.goForward()
     }

    return(<div className="container bg-light border">
            <Helmet>
               <title>This is the About me  Page title!</title>
            </Helmet>
        <h1> my Name is Imad Najmi ! </h1>
        <div>
          <img src="../imgs/najmi.jpg" width="200px" height="200px" />
        </div>
        <h5>Email: imadnajmi9@gmail.com   </h5>
        <h5>Tel: +212 07 62 95 17 42  </h5>
        <h5>Adress: Morroco marakech Chichaoua  </h5>
        <h5>Age: 22/03/1999  </h5>
        <h5>I am a Web Developper and I have a 
        physics degree at 2019</h5>
        <h5>Now I am Student at Cady Ayyad University in Marrakech </h5>
        <h5> I deal with those technologies :</h5>
        <ul>
           <li> HTML, CSS and Javascript </li>
           <li> Node JS and Express </li>
           <li> Php and Symfony Framework </li>
           <li> React JS and Api-Platform </li>
           <li> Python and django Framework</li>
           <li> Linux and SQL language</li>
        </ul>
        <h5> I speak  Arabic, Frensh and English  </h5>
        

<h2> my Works : </h2>
<section>
  <div className="work-item">
      <h3> e-commerce website </h3>
      <p>
      responsive website shows products to clients, 
      which an user can authenticate to buy a product, 
      and see his pannel that contains old and new chosen products, 
      payement is with paypal,
      I used jwt-authencation-bundle for security.
      </p>
      <p> <a href="https://shopping-najmi.herokuapp.com">link here </a> </p>
      <p>
        <img src="./imgs/shopping.png" width="200px" height="350px" />
      </p>
      <h4> Used Technologies </h4>
     
        <ul>
          <li>  Symfony and ApiPlatform   </li>
          <li>  React and Redux </li>
          <li>  Bootstrap </li>
          <li>  Axios </li>
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
      <p> <a href="https://najmi-accademy.herokuapp.com">link here </a> </p>
      <p>
        <img src="../imgs/accademy.png" width="400px" height="200px" />
      </p>
      <h4> Used Technologies </h4>
      
        <ul>
          <li>  Symfony  </li>
          <li>  Bootstrap </li>
        </ul>
     
  </div>
</section> 

    <div className="interests">
       <h2> my interests :  </h2>
       <h5> I interest in my familly and friends </h5>
       <h5> I like science and physics, I have a licence in physics </h5>
       <h5> I do sport, my favorite is running and body builder. </h5>
       <h5> I listen all kind of music. </h5>
    </div>
    <div className="text-center">
        <button className="btn btn-outline-primary"
         onClick={back}
         >
          {'<--Back'}
          </button>

           <button className="btn btn-outline-primary"
         onClick={forward}
         >
          {'Forward-->'}
          </button>
    </div>
    </div>);
};

export default Aboutme;
