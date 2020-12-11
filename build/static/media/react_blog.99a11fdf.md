<div class="box title has-text-centered has-text-primary mb-3 has-background-grey-dark">
 How to Create a Technical Blog by using React, Markdown and Syntax Highlighter Code ?
</div>

### 0. Introduction :
For developers, have a technical blog is one of most imporatnt thing to have a presence in the internet, but the majority did not know what the efficient way to create one.
One of the solution is to use **markdown**, but what's markdown ?

Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdow.

In this article we will talk about how to render markdown in react using [react-markdown](https://github.com/rexxars/react-markdown) library, and how to have a code syntax highlighting  for all programming languges with the [react-syntax-highlighter](https://github.com/najmi9/react-blog-syntaxhilighter) library.


### 1. Demo
Finaly, we will have a simple home page contains two links to two posts. each post has some code content in PHP, Python and JSX languages.
You can check the source code on [github](https://github.com/najmi9/react-blog-syntaxhilighter) directly.

<div class="text-center">
<img src="/static/imgs/demo.png" class="img">
</div>

## 2.Installation : 
```bash
# create a react app called my-blog
npx create-react-app bm-blog
cd my-blog
```

### 3. The sturcture of folders :
<div class="text-center">
<img src="static/imgs/dirs.png" class="dirs">
<div>

First, let's create a new folder `pages` contains all pages, then create a home page file called `home.jsx` contains the code below : 

```jsx
//src/pages/home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
         <div>
            <h1>Welcome To my Blog !</h1>
            <div className="posts">
               <p> <Link to="/blog/post1"> Post1 </Link></p>
               <p> <Link to="/blog/post2">Post2 </Link> </p>
            </div>
         </div>
    );
};

export default Home;
```
We need `react-router-dom` library to manage our routes, so think to install it :

```bash
yarn add react-router-dom
```

Now in `app.js` file we will create our routes, so edit your file to look like this:
```jsx
//src/app.js

import React from 'react';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// we will create those two files in a moment
import Post1 from './pages/blog/post1'
import Post2 from './pages/blog/post2'

const App = () => {
    return (
    <Router>
      <Switch>
        <Route path="/" component= { Home} exact />     
        <Route path="/blog/post1" component={Post1} />
        <Route path="/blog/post2" component={Post2} />
      </Switch>
    </Router>
    );
};

export default App;

```
As I mentioned we will create two posts in blog 'pages/blog' folder.

```jsx
//src/pages/blog/post1.jsx

import React from 'react';

// the markdown content of post1.
import content from '../../posts/post1.md';
// component take the content to parse it to html
import MarkDown from '../../components/markdown/markdown_parser';

const Post1 = () => {
    return (
         <div className="main">
        	<MarkDown content={content} />
        </div>
    );
};
export default Post1;

//src/pages/blog/post2.jsx
import React from 'react';

import content from '../../posts/post1.md';
import MarkDown from '../../components/markdown/markdown_parser';

const Post2 = () => {
    return (
         <div className="main">
        	<MarkDown content={content} />
        </div>
    );
};
export default Post2;
```

In a folder called `posts` in `src` dirctory we are going to create two files `post1.md` and `post2.md`, each file contain a markdown content of a each post, so you can write what you want as a content.

in `src/posts/post1.md` copy and paste this code :

```md
# This is the title of the post 1

\`\`\`jsx
//example of jsx code
import React from 'react';
const id = "id";
const div = <div id={id} />
const App = () => "row function"
\`\`\`

\`\`\`php
//example of php code
$table = [];
$table[] = 'Hi';
echo "Hello World" + count($table);
\`\`\`

\`\`\`python
#example of python code
def index():
	[ print(i) for i in range(10) ]
\`\`\`
```

The last Step is to create a component that take the markdown to parse it to html, so create a folder `components` folder in `src` dirctory and also those two files :

```jsx
//src/components/markdown_parser.jsx

import React, { useEffect, useState } from 'react';

//Renders Markdown as pure React components.
import ReactMarkdown from 'react-markdown';

//Syntax highlighting component 
import CodeBlock from "./CodeBlock.jsx";

const MarkDownParser = ({content}) => {
	const [markdown, setMarkdown] = useState('');
  // fetch the content from the file
	useEffect(()=>{
		fetch(content)
        .then(res=>res.text())
        .then(text=>{
            setMarkdown(text);
        })
        .catch(err=>{
            console.log(err)
        });
	}, [content]);
    return (
    	    <div className="container">
                <ReactMarkdown 
                source={markdown}
                // every tag <pre> will be changed to this component to display // the styled code
                 renderers={{ code: CodeBlock }}
                />
            </div>      
    );
};
export default MarkDownParser;
```
Here you need to install the `react-markdown` library:
```bash
yarn add react-markdown
```

Finally, in order to have a hilight syntax, the code must wrapped by a `SyntaxHighlighter` component that render it in elegant and styled way,
on every pre tag, this component will take the language and  the content to display it with syntax highlighting, so we need to create `CodeBlock`  responsible for dealing with our `<pre />` HTML tags.
```jsx
//src/components/CodeBlock.jsx

import React from "react"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} showLineNumbers={true} style={dracula}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
```
Don't forget to install this library by this command :
```bash
yarn add react-syntax-highlighter
```

___
Author : **Imad Najmi**
Github : [here](https://github.com/najmi9/react-blog-syntaxhighlighter)


