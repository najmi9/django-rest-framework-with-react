import React from 'react';
import { Helmet } from 'react-helmet';

import content from '../../Components/blog/posts/math_for_developers.md';
import MarkDown from '../../Components/blog/markdown-parser/MarkDown';


const DeveloperMath = () => {
    return (
        <div className="main">
            <Helmet>
                <title>najmi-imad.com| Math for Develpers</title>
            </Helmet>
            <MarkDown content={content} />
        </div>
    );
};


export default DeveloperMath;
