import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Tag({ children, className }: Props) {
  return (
    <span
      className={cn(
        "mr-2 rounded bg-stone-900 p-2 text-sm font-semibold font-mono text-stone-300",
        className
      )}
    >
      {children}
    </span>
  );
}
