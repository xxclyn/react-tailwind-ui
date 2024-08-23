import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export default ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[gfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={coy}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        table: ({ node, ...props }) => (
          <table className="md-table" {...props} />
        ),
        thead: ({ node, ...props }) => (
          <thead className="md-thead" {...props} />
        ),
        tbody: ({ node, ...props }) => (
          <tbody className="md-tbody" {...props} />
        ),
        th: ({ node, ...props }) => <th className="md-th" {...props} />,
        tr: ({ node, ...props }) => <tr className="md-tr" {...props} />,
        td: ({ node, ...props }) => <td className="md-td" {...props} />,
      }}
    />
  );
};
