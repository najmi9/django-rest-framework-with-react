import React from 'react';
import { Route } from "react-router-dom";
import Django from './django_hello_world';
import DeveloperMath from './math_for_developers'
import Mercure from './mercure_show';
import SymfonyReact from './symfony_react';
import Express from './node_express_sequelize';
import OpenSSH from './open_ssh';
import WebScraping from './web_scraping'
import ReactBlog from './react_blog'
import FacebookPost from './fc_automate_posts'
import DoctrineCache from './doctrine_cache';

const StaticRoutes = () => {
  return (
    <>
        <Route path="/doctrine-orm-second-level-cache" component={DoctrineCache} />
        <Route path="/django-demo-app" component={Django} />
        <Route path="/math-for-developers" component={DeveloperMath} />
        <Route path="/mercure-protocol-with-symfony" component={Mercure} />
        <Route path="/node-express-app" component={Express} />
        <Route path="/symfony-react" component={SymfonyReact} />
        <Route path="/use-open-ssh-connection" component={OpenSSH} />
        <Route path="/web-scraping" component={WebScraping} />
        <Route path="/react-markdown-syntaxhlighter" component={ReactBlog} />
        <Route path="/automate-publishing-posts-on-facbook" component={FacebookPost} />
    </>
  );
};

export default StaticRoutes;
