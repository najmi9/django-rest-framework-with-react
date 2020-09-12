import React from 'react';
import { Route } from "react-router-dom";
import Django from './django_hello_world';
import DeveloperMath from './math_for_developers'
import Mercure from './mercure_show';
import SymfonyReact from './symfony_react';
import Express from './node_express_app';

const StaticRoutes = () => {
    return (
        <>
      <Route path="/django-demo-app" component= { Django } />
      <Route path="/math-for-developers" component= { DeveloperMath } />
      <Route path="/mercure-protocol-with-symfony" component= { Mercure } />
      <Route path="/node-express-app" component= { Express } />
      <Route path="/symfony-react" component= { SymfonyReact } />
        </>
    );
};


export default StaticRoutes;
