// MarkdownRenderer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MarkdownRenderer = ({ content }) => {
    return (
        <ReactMarkdown
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                        <SyntaxHighlighter style={coy} language={match[1]} PreTag="div" {...props}>
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                }
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
