import * as React from "react";
import { cn } from "@/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  "aria-required"?: boolean;
}

const FormLabel = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    { className, children, "aria-required": isRequired = false, ...props },
    ref
  ) => (
    <label
      ref={ref}
      className={cn(
        "text-primary text-lg font-semibold flex justify-start items-start gap-spacing-xxs",
        className
      )}
      {...props}
    >
      {children}
      {isRequired && <span className="text-destructive">*</span>}
    </label>
  )
);

FormLabel.displayName = "Label";

export { FormLabel };
