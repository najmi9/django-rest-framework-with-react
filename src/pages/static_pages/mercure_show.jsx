import { Helmet } from 'react-helmet';
import React from 'react';

import content from '../../components/blog/posts/mercure_symfony.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';


const Mercure = () => {
    return (
        <section>
            <Helmet>
                <title>najmi-imad.com| Using Mercure in Symfony and Api Platform</title>
            </Helmet>
            <MarkDown content={content} />
        </section>
    );
}
export default Mercure;