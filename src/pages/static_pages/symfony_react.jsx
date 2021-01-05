import React from 'react';
import { Helmet } from 'react-helmet';
import content from '../../components/blog/posts/react_symfony.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';

const SymfonyReact = () => {
    return (
        <section>
            <Helmet>
                <title>najmi-imad.com| React in Symfony Project</title>
            </Helmet>
            <MarkDown content={content} />
        </section>
    );
};

export default SymfonyReact;
