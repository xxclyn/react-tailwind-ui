import { forwardRef } from "react";
import clipboard from "./clipboard";
import stack from "./stack";
import layers from "./layers";
import { cn } from "../utils/css";

const Icons = {
  clipboard,
  stack,
  layers,
};

export default forwardRef(
  ({ size = 16, color = "#000", type, className, style, ...props }, ref) => {
    let Component = Icons[type];
    if (!Component) {
      console.error(`Icon type "${type}" not supported.`);
      return null;
    }
    return (
      <Component
        ref={ref}
        className={cn("cursor-pointer select-none", className)}
        style={{
          width: size + "px",
          height: size + "px",
          color: color,
          ...style,
        }}
        {...props}
      ></Component>
    );
  }
);
