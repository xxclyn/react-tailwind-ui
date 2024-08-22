import { useState } from "react";
import { Card, Icon } from "@";
import markdownContent from "./example.md";
import Button from "./example";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

export default () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Card title="按钮类型">
      <div className="pb-4 border-b">
        <Button></Button>
      </div>
      <div className="flex items-center justify-center py-2 border-b">
        <Icon className="mx-2 hover:scale-110" type="clipboard" />
        <Icon
          onClick={() => setIsVisible(!isVisible)}
          className="mx-2 hover:scale-110"
          type={isVisible ? "layers" : "stack"}
        />
      </div>
      <div className={isVisible ? "block" : "hidden"}>
        <ReactMarkdown
          children={markdownContent}
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
              <table className="my-custom-table" {...props} />
            ),
            thead: ({ node, ...props }) => (
              <thead className="my-custom-thead" {...props} />
            ),
            tbody: ({ node, ...props }) => (
              <tbody className="my-custom-tbody" {...props} />
            ),
            th: ({ node, ...props }) => (
              <th className="my-custom-th" {...props} />
            ),
            tr: ({ node, ...props }) => (
              <tr className="my-custom-tr" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="my-custom-td" {...props} />
            ),
          }}
        />
      </div>
    </Card>
  );
};
