"use client";

import { useId, useState, type ReactNode } from "react";

/** Collapsed text with "Read More >" / "Read Less >", as on the live event pages. */
export function ReadMore({ collapsed, full }: { collapsed: ReactNode; full: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <>
      <div id={id}>{open ? full : collapsed}</div>
      <p className="mt-[0.9375rem] text-center">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(!open)}
          className="leading-[1.4] hover:opacity-70"
        >
          {open ? "Read Less >" : "Read More >"}
        </button>
      </p>
    </>
  );
}
