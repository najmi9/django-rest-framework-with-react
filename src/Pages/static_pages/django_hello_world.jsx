import React from 'react';

import content from '../../Components/blog/posts/django_api.md';
import MarkDown from '../../Components/blog/markdown-parser/MarkDown';
import { Helmet } from 'react-helmet';


const Django = () => {
    return (
    	<>
    	<Helmet>
               <title>Django Rest Framework ApiView and React JS
         </title>
        </Helmet>
        <div className="main">
        	<MarkDown content={content} />
        </div>
        </>
    );
};


export default Django;