"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";
import cn from "../../tailwindcss-config";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "border-lightGray bg-white ring-offset-cultured focus-visible:ring-cultured data-[state=checked]:bg-brand dark:focus-visible:ring-brand dark:data-[state=checked]:bg-brand dark:data-[state=checked]:text-brand peer h-4 w-4 shrink-0 rounded-sm border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:ring-offset-slate-950",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
    // className={cn('flex items-center justify-center text-current')}
    // className={cn('flex items-center justify-start text-current')}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
