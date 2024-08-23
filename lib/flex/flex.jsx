import { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/css";

const variants = cva("flex", {
  variants: {
    vertical: {
      true: "flex-col",
      false: "flex-row",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
    justify: {
      normal: "justify-normal",
      "flex-start": "justify-start",
      "flex-end": "justify-end",
      center: "justify-center",
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly",
      stretch: "justify-stretch",
    },
    align: {
      "flex-start": "items-start",
      "flex-end": "items-end",
      center: "item-center",
      baseline: "items-baseline",
      stretch: "item-stretch",
    },
    gap: {},
    colGap: {},
  },
  defaultVariants: {
    vertical: false,
    wrap: true,
    justify: "center",
    align: "center",
  },
});

export default forwardRef(
  ({ className, children, gap = 0, colGap = 0 }, ref) => (
    <div
      style={{ gap: gap + "px", columnGap: colGap + "px" }}
      ref={ref}
      className={cn(variants({ type, size, className }))}
    >
      {children}
    </div>
  )
);
