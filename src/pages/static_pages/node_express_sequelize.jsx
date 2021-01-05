import React from 'react';
import { Helmet } from 'react-helmet';
import content from '../../components/blog/posts/node_express_sequelize.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';

const Express = () => {
    return (
        <section>
            <Helmet>
                <title>najmi-imad.com| Express and Sequelize Application</title>
            </Helmet>
            <MarkDown content={content} />
        </section>
    );
};

export default Express;
