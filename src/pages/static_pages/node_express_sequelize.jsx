import React from 'react';
import { Helmet } from 'react-helmet';
import content from '../../components/blog/posts/node_express_sequelize.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';

const Express = () => {
    return (
        <div className="main">
            <Helmet>
                <title>najmi-imad.com| Express and Sequelize Application</title>
            </Helmet>
            <MarkDown content={content} />
        </div>
    );
};

export default Express;
