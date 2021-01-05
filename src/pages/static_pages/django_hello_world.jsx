import React from 'react';
import content from '../../components/blog/posts/django_api.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';
import { Helmet } from 'react-helmet';

const Django = () => {
    return (
        <section>
            <Helmet>
                <title>
                    Django Rest Framework ApiView and React JS
                </title>
            </Helmet>
            <div className="main">
                <MarkDown content={content} />
            </div>
        </section>
    );
};

export default Django;
