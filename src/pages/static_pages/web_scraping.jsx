import React from 'react';
import { Helmet } from 'react-helmet';
import content from '../../components/blog/posts/web_scraping.md';
import MarkDown from '../../components/blog/markdown-parser/MarkDown';

const WebScraping = () => {
    return (
        <section>
            <Helmet>
                <title>najmi-imad.com| Web Scraping With Python</title>
            </Helmet>
            <MarkDown content={content} />
        </section>
    );
};

export default WebScraping;
