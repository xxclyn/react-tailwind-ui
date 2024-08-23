import { useState } from "react";
import { Card, Icon } from "@";
import { cn } from "@doc/utils/css";
import Markdown from "@doc/components/markdown/markdown";

export default ({ title, markdowncontent, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Card title={title} contentClass="p-0">
      <div className="pb-4 border-b">{children}</div>
      <div className="flex items-center justify-center py-2">
        <Icon className="mx-2 hover:scale-110" type="clipboard" />
        <Icon
          onClick={() => setIsVisible(!isVisible)}
          className="mx-2 hover:scale-110"
          type={isVisible ? "layers" : "stack"}
        />
      </div>
      <div className={cn(isVisible ? "block" : "hidden", "border-t")}>
        <Markdown content={markdowncontent}></Markdown>
      </div>
    </Card>
  );
};
