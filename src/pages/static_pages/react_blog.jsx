import React from 'react';
import { Helmet } from 'react-helmet';
import content from '../../components/blog/posts/react_blog.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';

const ReactBlog = ({ className }) => {
    return (
        <section>
            <Helmet>
                <title>najmi-imad.com| Create React Markdown blog with highlight code</title>
            </Helmet>
            <MarkDown content={content} />
        </section>
    );
};

export default ReactBlog;
