import React from 'react';
import { Helmet } from 'react-helmet';
import content from '../../Components/blog/posts/web_scraping.md';
import MarkDown from '../../Components/blog/markdown-parser/MarkDown';

const WebScraping = () => {
    return (
        <div className="main">
            <Helmet>
                <title>najmi-imad.com| Web Scraping With Python</title>
            </Helmet>
            <MarkDown content={content} />
        </div>
    );
};

export default WebScraping;
