import { forwardRef } from "react";
import { cn } from "../utils/css";

export default forwardRef(({ className, children }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "flex flex-col items-start rounded-md bg-background border p-1 shadow-sm",
      className
    )}
  >
    {children}
  </ul>
));
