import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown, { Components } from "react-markdown";

interface Props {
  markdown: string;
}

const MarkdownRenderer = ({ markdown }: Props) => {
  const components: Partial<Components> = {
    code({ node, className, children, style, ref, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const trimmedChildren = String(children).replace(/\n$/, "");
      return match ? (
        <SyntaxHighlighter style={materialDark} language={match[1]} PreTag="div" {...props}>
          {trimmedChildren}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className + "bg-gray-200 px-1 py-0.5 rounded text-sm font-mono text-red-500"}>
          {children}
        </code>
      );
    },
  };

  return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
};

export default MarkdownRenderer;
