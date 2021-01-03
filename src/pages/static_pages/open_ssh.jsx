import React from 'react';
import { Helmet } from 'react-helmet';
import content from '../../components/blog/posts/ssh.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';

const OpenSSH = () => {
    return (
        <div className="main">
            <Helmet>
                <title>najmi-imad.com| Open SSH Connection on Linux</title>
            </Helmet>
            <MarkDown content={content} />
        </div>
    );
};

export default OpenSSH;
