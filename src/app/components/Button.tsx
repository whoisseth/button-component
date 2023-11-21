/** @format */

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slatebg-slate-900-foreground shadow hover:bg-slate-900/90 text-white",
        destructive:
          "bg-red-400 text-red400bg-red-400-foreground shadow-sm hover:bg-red-400/90 text-white",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-blue-500 text-blubg-blue-500-foreground shadow-sm hover:bg-blue-500/80 text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-slate-900 underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
// Button.displayName = "Button";

export { Button, buttonVariants };
