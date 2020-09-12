import React, { useEffect, useState } from 'react';
//import ReactMarkdown from 'react-markdown';
import content from './1.md'; 

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Markdown from 'markdown-to-jsx';

const MarkDown = () => {
	const [md, setMd] = useState('');
	useEffect(()=>{
		fetch(content).then(res=>res.text()).then(x=>setMd(x));
	}, []);

    return (
    	
    	<Markdown
           options={{
            overrides: {
                SyntaxHighlighter: {
                    component: SyntaxHighlighter,
                    props: {
                        docco,
                    },
                },
            },
        }}
        >
    	     {md}
        </Markdown>
        
    );
};

export default MarkDown;
