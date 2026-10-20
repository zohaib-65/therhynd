import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        // Brand variants measured from therhynd.com
        solid: "bg-ink font-light text-paper hover:bg-ink/85",
        "outline-pill": "rounded-full border-forest bg-transparent font-light text-ink hover:bg-forest/10",
        slate: "bg-slate font-light text-paper hover:bg-slate/85",
        charcoal: "bg-charcoal font-light text-paper hover:bg-charcoal/85",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        // CTA with tracked label ("Find out more"): 40px/20px from tablet up,
        // larger on phones as on the live mobile site
        cta: "h-auto min-h-[3.1875rem] max-w-full px-3 py-1 text-center text-[1.375rem] tracking-[0.08em] whitespace-normal md:h-10 md:min-h-0 md:px-2.5 md:py-0 md:text-button md:whitespace-nowrap",
        // image-tile CTA ("Explore weddings"): 42px/25px on desktop
        tile: "h-auto min-h-[3.1875rem] max-w-[calc(100%-2rem)] px-3 py-1 text-center text-[1.375rem] font-medium tracking-[0.08em] whitespace-normal md:h-[2.625rem] md:min-h-0 md:px-2 md:py-0 md:text-[clamp(1.125rem,0.2rem+2vw,1.5625rem)] md:whitespace-nowrap",
        // form submit buttons
        form: "h-10 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
