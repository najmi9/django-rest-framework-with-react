import React from 'react';
import content from '../../components/blog/posts/doctrine_cache.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';
import { Helmet } from 'react-helmet';

const DoctrineCache = () => {
    return (
        <section>
            <Helmet>
                <title>Doctrine ORM: Integration Of Second Level Cache With Symfony.
                </title>
            </Helmet>
            <div className="main">
                <MarkDown content={content} />
            </div>
        </section>
    );
};

export default DoctrineCache;
