import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AsideBar = () => {
    return (
       <div  className="list-group">
           	<Link to="/django-demo-app"  
           		className="list-group-item list-group-item-action btn-link">
           		Explain Basic Django App
           	</Link> 

           	<Link to="/math-for-developers" 
           		className="list-group-item list-group-item-action">
           		 What are the math concepts  I should know it as a developer ?
           	 </Link>

           	<Link to="/mercure-protocol-with-symfony" 
           		className="list-group-item list-group-item-action">
           	 	How to use Mercure Protocol with Symfony and API Platform ?
           	 </Link>

           	<Link to="/node-express-app" 
           		className="list-group-item list-group-item-action">
           		Hello World Express application using Sequelize ? 
           	</Link> 

           	<Link to="/symfony-react" 
           		className="list-group-item list-group-item-action"> 
           		How to use Symfony and React in the same project ?
           	</Link> 
       </div> 
    );
};

export default AsideBar;
