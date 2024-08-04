import { cn } from "@/lib/utils";
import React, { HTMLAttributes, PropsWithoutRef, ReactNode } from "react";

const Card = ({
  children,
  className,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="bg-gradient-to-t p-0.5 rounded-2xl from-transparent to-muted">
      <div
        className={cn("p-16  bg-card rounded-[0.875rem]", className)}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
