import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/home.css'
import { Helmet } from 'react-helmet';

//import Svg from '../Components/svg';
const Home = () => {


    return (
       <div>
        <Helmet>
               <title>najmi-imad.com| Home</title>
            </Helmet>
         <div className="header2">
            <div >
                <img src="/imgs/imad.jpg" alt="Imad Najmi" className="my-img" />
            </div>
            <h2>
               Imad Najmi
               Freelancer
            </h2>

         </div>

           <h1 className="hello-alert"> Hi, My Name is IMAD and Welome To My Blog
           <span role="img" aria-label="Hhhh"> 😃 </span>! </h1>
           
           <div className="elements">
            <div className="card element articles">
            	<div className="card-title text-center">
              		<Link to="/blog"><h3> My Articles </h3> </Link>
                </div>
                <div className="card-body">
                  Most of time, I write articles and posts about different things in  
                  web developpment, I talk about some technologies like PHP, Python, 
                  Node JS and  how to use them.
                </div>
            </div>

            <div className="card element activities">
              <div className="card-title text-center">
              	<Link to="/activities"><h3> Activities </h3></Link>
              </div>
              <div className="card-body">
                New projects, challanges, articles and videos !
              </div>
            </div>

            <div className="card element aboutme">
             <div className="card-title text-center">
               <Link to="about-me"><h3> Who I am ? </h3> </Link>
             </div>
             <div className="card-body text-center">
               <img src="imgs/imad.jpg" alt="imad najmi" className="my-image" />
             </div>
           </div>
        </div>
    </div> 
    );
};

export default Home;
