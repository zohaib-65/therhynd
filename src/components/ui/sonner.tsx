"use client";

import type { CSSProperties } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

/**
 * Toasts (sonner) in the site's colours and font. Rendered once in the root
 * layout; call `toast()` from "sonner" anywhere. Toasts are announced to
 * screen readers by sonner's live region.
 */
export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="bottom-center"
      closeButton
      style={
        {
          "--normal-bg": "var(--color-paper)",
          "--normal-text": "var(--color-ink)",
          "--normal-border": "color-mix(in oklab, var(--color-ink) 25%, transparent)",
          "--border-radius": "0px",
        } as CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "font-sans text-[0.9375rem] leading-snug shadow-md",
          title: "font-light!",
          description: "text-ink/80",
          success: "[&_[data-icon]]:text-forest",
          error: "[&_[data-icon]]:text-error",
          warning: "[&_[data-icon]]:text-error",
        },
      }}
      {...props}
    />
  );
}
