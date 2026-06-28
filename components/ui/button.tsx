"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-4xl border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none hover:cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-gold text-foreground hover:bg-light-gold",
        outline:
          "border-gold bg-light-gold/30 hover:bg-light-gold/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        lg: "h-10 gap-1.5 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xl: "h-12 gap-1.5 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 text-md",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

function DoubleBorderButton({
  className,
  disabled,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <div
      className={cn(
        "border-gold inline-flex items-center justify-center rounded-full border p-px",
        disabled && "opacity-50",
      )}
    >
      <ButtonPrimitive
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size, className }),
          "font-kasepi-sans h-10 rounded-full px-6 py-4 text-base tracking-wide uppercase sm:h-12 sm:px-8 sm:py-5 sm:text-lg",
        )}
        {...props}
      />
    </div>
  );
}

export function AnimatedButton({
  href,
  text,
  size = "default",
  variant = "default",
  color = "gold",
  newTab = false,
  onClick,
  fullWidth = false,
}: VariantProps<typeof buttonVariants> & {
  href: string;
  text: string;
  color?: "gold" | "wine" | "outline";
  newTab?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border p-px",
        fullWidth && "flex w-full",
        color === "wine" && "border-wine",
        color === "gold" && "border-gold",
        color === "outline" && "border-transparent",
      )}
    >
      <Button
        nativeButton={false}
        className={cn(
          buttonVariants({ size, variant }),
          "font-bricolage-grotesque group rounded-full tracking-wide uppercase shadow-lg transition delay-[0.1s] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]",
          fullWidth && "w-full",
          color === "gold" && "bg-gold hover:border-gold hover:bg-wine",
          color === "wine" && "bg-wine hover:border-wine hover:bg-gold",
          color === "outline" && "border-gold hover:bg-gold bg-transparent",
        )}
        render={
          <Link
            href={href}
            onClick={onClick}
            {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <div className="relative overflow-hidden">
              <p
                className={cn(
                  "flex items-center gap-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-20px]",
                  color === "gold" ? "text-wine" : "text-gold",
                )}
              >
                {text}
              </p>
              <p
                aria-hidden
                className={cn(
                  "absolute top-5 left-0 flex items-center gap-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0",
                  color === "gold" ? "text-gold" : "text-wine",
                )}
              >
                {text}
              </p>
            </div>
          </Link>
        }
      />
    </div>
  );
}

export function AnimatedSingleBorderButton({
  href,
  text,
  size = "default",
  variant = "default",
  color = "gold",
}: VariantProps<typeof buttonVariants> & { href: string; text: string; color?: "gold" | "wine" }) {
  return (
    <Button
      nativeButton={false}
      className={cn(
        buttonVariants({ size, variant }),
        "font-bricolage-grotesque group rounded-full tracking-wide uppercase shadow-lg transition delay-[0.1s] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]",
        color === "gold" && "bg-gold hover:border-gold hover:bg-wine",
        color === "wine" && "bg-wine hover:border-wine hover:bg-gold",
      )}
      render={
        <Link href={href}>
          <div className="relative overflow-hidden">
            <p
              className={cn(
                "flex items-center gap-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-[-20px]",
                color === "gold" ? "text-wine" : "text-gold",
              )}
            >
              {text}
            </p>
            <p
              aria-hidden
              className={cn(
                "absolute top-5 left-0 flex items-center gap-2 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0",
                color === "gold" ? "text-gold" : "text-wine",
              )}
            >
              {text}
            </p>
          </div>
        </Link>
      }
    />
  );
}

export function AnimatedLink({
  href,
  text,
  className,
}: {
  href: string;
  text: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group font-bricolage-grotesque relative whitespace-nowrap", className)}
    >
      {text}
      <span className="bg-gold absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export { Button, buttonVariants, DoubleBorderButton };
