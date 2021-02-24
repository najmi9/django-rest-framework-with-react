import React from 'react';
import { Helmet } from 'react-helmet';

import MarkDown from '../components/blog/markdown-parser/MarkDown';
import ReactBlog from '../components/blog/posts/react_blog.md';
import Django from '../components/blog/posts/django_api.md';
import DeveloperMath from '../components/blog/posts/math_for_developers.md'
import Mercure from '../components/blog/posts/mercure_symfony.md';
import SymfonyReact from '../components/blog/posts/react_symfony.md';
import Express from '../components/blog/posts/node_express_sequelize.md';
import OpenSSH from '../components/blog/posts/ssh.md';
import WebScraping from '../components/blog/posts/web_scraping.md'
import FacebookPost from '../components/blog/posts/fc_automate_post.md'
import DoctrineCache from '../components/blog/posts/doctrine_cache.md';
import MessengerSymfony from '../components/blog/posts/messenger_symfony.md';
import LinuxCommands from '../components/blog/posts/linux-commands.md';

import Error404 from '../errors/error404';
import Footer from '../components/Footer';

const Article = ({ match }) => {
	const { slug } = match.params;
	
	const slugs = {
		"doctrine-orm-second-level-cache": {
			title: "Doctrine ORM: Integration Of Second Level Cache With Symfony.",
			content: DoctrineCache
		},
		"django-demo-app": {
			title: "Django Rest Framework ApiView and React JS",
			content: Django
		},
		"math-for-developers": {
			title: "Do developers need Math?",
			content: DeveloperMath
		},
		"mercure-protocol-with-symfony": {
			title: "Mercure Protocol With Symfony and Api Platform",
			content: Mercure
		},
		"node-express-app": {
			title: "Node",
			content: Express
		},
		"symfony-react": {
			title: "How to create mrdern website with Symfony Api-Platform and React JS?",
			content: SymfonyReact
		},
		"use-open-ssh-connection": {
			title: "What is SSH, How it's work, How we can use it and How to secure a open SSH connection?",
			content: OpenSSH
		},
		"web-scraping-with-examples": {
			title: "Web Scraping With Python: Partcical examples",
			content: WebScraping
		},
		"automate-publishing-posts-on-facbook": {
			title: "Create posts automatically on Facebook with Selenium and Python",
			content: FacebookPost
		},
		"symfony-messenger-supervisor-configuration": {
			title: "Symfony Messenger: Supervisor Configuration In Production Enviroment",
			content: MessengerSymfony
		},
		"usefull-linux-commands": {
			title: "Usefull Linux Commands",
			content: LinuxCommands
		},
		"react-markdown-syntaxhlighter" : {
			title: "How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?",
			content: ReactBlog
		}

	};

	if (!slugs[slug]) {
		return <Error404 />;
	}

	return (<>
        <section className="main-blog">
	        <Helmet>
	            <title> { slugs[slug].title } </title>
	        </Helmet>
	        <MarkDown content={slugs[slug].content} />
    	</section>
        <Footer />
    </>);
}

export default Article;