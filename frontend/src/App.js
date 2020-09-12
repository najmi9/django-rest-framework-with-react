import React, {useEffect} from 'react';
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import PostDetails from './Pages/PostDetails';
import Component from './Pages/Component';
import MarkDown from './Pages/MarkDown';
import Test from './Pages/Test';
import Footer from './Components/Footer';
import Blog from './Pages/Blog';
import Courses from './Pages/Courses';
import StaticRoutes from './Pages/static_pages/static-routes'
import SpinningDots from '@grafikart/spinning-dots-element'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import Header from './Components/Header';
import './Styles/header.css';

const App = () => {
  const reload = () => window.location.reload();
  useEffect(()=>{    
      customElements.define('spinning-dots', SpinningDots)
  }, []);

    return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component= { Home} exact />
        <Route path="/react" component= { Component} exact />
        <Route path="/md" component= { MarkDown} exact />
        <Route path="/test" component= { Test} exact />
        <Route path="/blog-:id" component= { PostDetails}  />
        <Route path="/about-me" component= { Aboutme}  />
        <Route path="/blog" component= { Blog}  />
        <Route path="/courses" component= { Courses}  />
         <Route path="/static.html" onEnter={reload} />
      
        <StaticRoutes />
      </Switch>
      <Footer />
    </Router>
    );
};

export default App;
