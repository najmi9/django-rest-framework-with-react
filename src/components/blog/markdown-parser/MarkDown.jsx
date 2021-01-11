import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Loader from '../../Loader';
import CodeBlock from "./CodeBlock.jsx";

import { toast } from 'react-toastify'

const MarkDown = ({ content }) => {

    const [markdown, setMarkdown] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(content)
            .then(res => res.text())
            .then(text => {
                setMarkdown(text);
                setLoading(true);
            })
            .catch(err => {
                setLoading(false);
                toast.error("unexpected error happen when we tryinig to load the post !")
            });

    }, [content]);

    return (
        <article className="article">
            { !loading && (<Loader color="orange" />)}
            {loading && (
                <div className="container">
                    <ReactMarkdown
                        source={markdown}
                        skipHtml={false}
                        escapeHtml={false}
                        renderers={{ code: CodeBlock }}
                    />
                </div>
            )}
        </article>
    );
};

export default MarkDown;
