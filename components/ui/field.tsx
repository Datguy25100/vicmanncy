import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full rounded-lg border border-ink-muted/25 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/70 transition-colors duration-150 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) => (
  <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
    {children}
  </label>
);

export const ErrorText = ({ children }: { children?: string }) =>
  children ? <p className="mt-1.5 text-xs font-medium text-red-600">{children}</p> : null;

export const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldBase, className)} {...props} />
  )
);
Input.displayName = "Input";

export const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldBase, "min-h-[120px] resize-y", className)} {...props} />
  )
);
Textarea.displayName = "Textarea";

export const Select = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select ref={ref} className={cn(fieldBase, "appearance-none bg-white", className)} {...props}>
      {children}
    </select>
  )
);
Select.displayName = "Select";
