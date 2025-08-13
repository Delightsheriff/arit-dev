"use client";

import type React from "react";
import { type VariantProps } from "class-variance-authority";

import { Button, buttonVariants } from "@/components/ui/button";

interface AnimatedButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function AnimatedButton({
  children,
  className = "",
  variant,
  size,
  asChild,
  ...props
}: AnimatedButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      asChild={asChild}
      className={`transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg active:scale-95 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
