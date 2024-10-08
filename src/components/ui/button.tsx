import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center will-change-transform group overflow-hidden  relative justify-center whitespace-nowrap rounded-full  font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-t from-primary-dark to-primary text-primary-foreground shadow-lg shadow-primary/10 hover:bg-primary/90 hover:scale-105 ",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input  shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-sm ",
        ghost: "hover:text-primary ",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 md:h-14 px-4 md:px-6 text-sm md:text-base",
        sm: "h-12  px-4 text-md",
        lg: "h-10  px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const gradientVariants = cva(
  "  duration-300 will-change-auto  rounded-[inherit]  ",
  {
    variants: {
      variant: {
        default:
          "opacity-0 bg-gradient-to-t from-primary-dark to-primary text-primary-foreground shadow hover:bg-primary/90  from-30% group-hover:opacity-100",
        destructive: "",
        outline:
          "group-hover:bg-white  group-hover:animate-in  group-hover:slide-in-from-left-full animate-out slide-out-from-right-full transition-transform",
        secondary: "",
        ghost: "",
        link: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  contentClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      contentClassName,
      size,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "absolute w-full h-full ",
            gradientVariants({ variant })
          )}
        ></div>
        <span
          className={cn(
            "inline-flex items-center will-change-transform gap-1 z-10",
            contentClassName
          )}
        >
          {children}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
