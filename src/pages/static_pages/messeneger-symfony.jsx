import React from 'react';
import content from '../../components/blog/posts/messenger_symfony.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';
import { Helmet } from 'react-helmet';

const MessengerSymfony = () => {
    return (
        <section>
            <Helmet>
                <title>Messenger: Sync & Queued Message Handling
                </title>
            </Helmet>
            <div className="main">
                <MarkDown content={content} />
            </div>
        </section>
    );
};

export default MessengerSymfony;
