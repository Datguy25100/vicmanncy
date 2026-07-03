import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const variantClasses: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-accent text-white shadow-cta hover:bg-accent-dark hover:shadow-none focus-visible:outline-accent-dark",
  secondary:
    "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  ghost: "bg-transparent text-ink hover:text-primary",
};

const sizeClasses: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 whitespace-nowrap";

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonAsButton | ButtonAsLink>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

    if ("href" in props && props.href) {
      const { href, ...rest } = props as ButtonAsLink;
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...rest}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as ButtonAsButton)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
