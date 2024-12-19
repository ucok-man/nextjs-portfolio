import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Highlight({ children, className }: Props) {
  return (
    <span
      className={cn(
        "font-mono font-extralight bg-gradient-to-r from-moody-500 to-moody-800 bg-clip-text text-base text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
