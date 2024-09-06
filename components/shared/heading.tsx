import React, { ReactNode } from "react";
import { Volkhov } from "next/font/google";
import { cn } from "@/lib/utils";

const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  size?: "h6" | "h5" | "h4" | "h3" | "h2";
  className?: string;
}

const Heading = ({
  children,
  size = "h4",
  className,
  ...props
}: HeadingProps) => {
  switch (size) {
    case "h2":
      return (
        <h2 className={cn(volkhov.className, className)} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(volkhov.className, className)} {...props}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={cn(volkhov.className, className)} {...props}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={cn(volkhov.className, className)} {...props}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={cn(volkhov.className, className)} {...props}>
          {children}
        </h6>
      );
  }
};

export default Heading;
