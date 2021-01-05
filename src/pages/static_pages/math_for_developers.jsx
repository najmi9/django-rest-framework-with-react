import React from 'react';
import { Helmet } from 'react-helmet';
import content from '../../components/blog/posts/math_for_developers.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';

const DeveloperMath = () => {
    return (
        <section>
            <Helmet>
                <title>najmi-imad.com| Math for Develpers</title>
            </Helmet>
            <MarkDown content={content} />
        </section>
    );
};

export default DeveloperMath;
