// Removendo importação do componente ToggleGroup que está causando erro
// Este arquivo foi modificado para remover dependências problemáticas

import React from 'react';
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

// Componente simplificado que não usa @radix-ui/react-toggle-group
const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & 
  VariantProps<typeof toggleVariants> & 
  { type?: "single" | "multiple" }
>(({ className, variant, size, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <React.Fragment>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, {
          variant,
          size,
        });
      })}
    </React.Fragment>
  </div>
));

ToggleGroup.displayName = "ToggleGroup";

const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof toggleVariants> & 
  { value: string }
>(({ className, children, variant, size, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        toggleVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };
