import React from 'react';

import content from '../../components/blog/posts/fc_automate_post.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';
import { Helmet } from 'react-helmet';


const FacebookPost = () => {
    return (
        <>
            <Helmet>
                <title>Automate publishing posts on Facebook</title>
            </Helmet>
            <div className="main">
                <MarkDown content={content} />
            </div>
        </>
    );
};


export default FacebookPost;
