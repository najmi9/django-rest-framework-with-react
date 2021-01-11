import React from 'react';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
//import PostDetails from './pages/PostDetails';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import Article from './pages/article';
//import Courses from './pages/Courses';
//import Course from './pages/Course';
import Works from './pages/my-works';
import Contact from './pages/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setup } from './service/AuthAPI';
import './styles/all.css';
//import Error404 from './errors/error404';

setup();
const App = () => {
    return (
      
    <Router>
      <Header />
      <Switch>        
        <Route path="/" component= { Home} exact />     
        <Route path="/about-me" component= { Aboutme}  />
        <Route path="/blog/:slug" component= { Article}  />
        <Route path="/blog" component= { Blog}  />
        { /*<Route path="/courses-:slug" component= { Course }  /> */}
        { /*<Route path="/courses/" component= { Courses }  /> */}
        <Route path="/my-works/" component= { Works }  />
        <Route path="/contact/" component= { Contact }  />
      </Switch>
      <Footer />
       <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </Router>
   
    );
};

export default App;
