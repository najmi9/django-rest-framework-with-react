import React, {  } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Markdown from 'markdown-to-jsx';
const Test = ({}) => {
    return (
        <SyntaxHighlighter language={'php'} style={docco}>
        
          $table = [];
          echo length($table);
        </SyntaxHighlighter>
    );
};

export default Test;
