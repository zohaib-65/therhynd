import type { ReactNode } from "react";

type CardSectionProps = {
  /** Visible heading; also names the section for assistive technology. */
  heading: string;
  headingId: string;
  children: ReactNode;
};

/** A white card with a light 45px heading, used for the mailing-list signup. */
export function CardSection({ heading, headingId, children }: CardSectionProps) {
  return (
    <section aria-labelledby={headingId} className="bg-paper px-4 py-8 lg:py-[2.1rem]">
      <div className="mx-auto max-w-[57.8rem] bg-white px-5 py-6 sm:px-12 lg:py-5">
        <h2 id={headingId} className="text-subheading font-light text-black">
          {heading}
        </h2>
        <div className="mt-3">{children}</div>
      </div>
    </section>
  );
}
