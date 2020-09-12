import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Component = () => {

  return (
    <SyntaxHighlighter language="php" style={dark}>
          $x = 21;
    </SyntaxHighlighter>
    
  );
};

export default Component;