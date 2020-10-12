import React from 'react';
import { Helmet } from 'react-helmet';

import content from '../../Components/blog/posts/react_symfony.md';
import MarkDown from '../../Components/blog/markdown-parser/MarkDown';


const SymfonyReact = () => {
    return (
         <div className="main">
          <Helmet>
               <title>najmi-imad.com| React in Symfony Project</title>
            </Helmet>
        	<MarkDown content={content} />
        </div>
    );
};


export default SymfonyReact;
