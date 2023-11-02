import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const MarkdownRenderer = ({ markdown }) => {
  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter style={materialDark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, "")} {...props} />
      ) : (
        <span className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono text-red-500">{children}</span>
      );
    },
  };

  return <ReactMarkdown components={components} children={markdown} />;
};

export default MarkdownRenderer;
