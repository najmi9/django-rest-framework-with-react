import React from 'react';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import PostDetails from './Pages/PostDetails';
import Footer from './Components/Footer';
import Blog from './Pages/Blog';
import Courses from './Pages/Courses';
import Course from './Pages/Course';
import Login from './Pages/Login';
import Webscraping from './Pages/web-scraping';
import StaticRoutes from './Pages/static_pages/static-routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setup } from './service/AuthAPI';

setup();
const App = () => {
  
    return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component= { Home} exact />     
        <Route path="/blog-:id" component= { PostDetails}  />
        <Route path="/about-me" component= { Aboutme}  />
        <Route path="/blog" component= { Blog}  />
        <Route path="/courses-:slug" component= { Course }  />
        <Route path="/courses/" component= { Courses }  />
        <Route path="/login/" component= { Login }  />
        <Route path="/web/" component= { Webscraping }  />
        <StaticRoutes />
      </Switch>
      <Footer />
       <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </Router>
    );
};

export default App;
