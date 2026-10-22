/** Forms that send data somewhere. Add a key here when adding a form. */
export type FormKey = "contact" | "newsletter" | "brochure" | "viewingEnquiry" | "weddingEnquiry" | "tableEnquiry" | "eventTickets";

/** Outcome of one submission attempt. */
export type SubmissionResult =
  | { status: "success" }
  /** No backend is connected yet: nothing was sent. */
  | { status: "not-connected" }
  | {
      status: "error";
      /** Field-level messages from the backend, keyed by field name. */
      fieldErrors?: Record<string, string>;
      /** Form-level message from the backend, if any. */
      message?: string;
    };

/** Plain JSON-serialisable values sent for one form. */
export type SubmissionPayload = Record<string, string | number | boolean | undefined>;
