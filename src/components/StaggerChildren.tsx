"use client";

import type { ReactNode } from "react";
import { Children } from "react";
import { FadeIn } from "./FadeIn";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
}

export function StaggerChildren({
  children,
  className,
  staggerMs = 80,
}: StaggerChildrenProps) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) => {
        if (!child) return null;

        return (
          <FadeIn key={index} delay={index * staggerMs}>
            {child}
          </FadeIn>
        );
      })}
    </div>
  );
}
