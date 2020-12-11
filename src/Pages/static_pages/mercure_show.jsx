import { Helmet } from 'react-helmet';
import React from 'react';

import content from '../../Components/blog/posts/mercure_symfony.md';
import MarkDown from '../../Components/blog/markdown-parser/MarkDown';


const Mercure = () => {
    return (
        <div className="main">
            <Helmet>
                <title>najmi-imad.com| Using Mercure in Symfony and Api Platform</title>
            </Helmet>
            <MarkDown content={content} />
        </div>
    );
}
export default Mercure;