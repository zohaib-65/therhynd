/** Forms that send data somewhere. Add a key here when adding a form. */
export type FormKey = "contact" | "newsletter" | "brochure" | "viewingEnquiry" | "weddingEnquiry" | "tableEnquiry" | "eventTickets";

/** Outcome of one submission attempt, independent of the provider. */
export type SubmissionResult =
  | { status: "success" }
  | { status: "not-configured" }
  | {
      status: "error";
      /** The provider rejected the data or could not be reached. */
      reason: "rejected" | "network" | "unexpected-response";
      /** Field-level messages returned by the provider, keyed by field name. */
      fieldErrors?: Record<string, string>;
      /** Form-level message returned by the provider, if any. */
      message?: string;
    };

/**
 * UI state of a form: ready, sending, or the last outcome. Invalid input is
 * reported per field by React Hook Form and never reaches the network.
 */
export type FormStatus = "idle" | "submitting" | SubmissionResult["status"];

/** Plain JSON-serialisable values sent to the provider. */
export type SubmissionPayload = Record<string, string | number | boolean | undefined>;

/** A provider adapter: sends one payload to one endpoint and reports what happened. */
export type SubmissionAdapter = (endpoint: string, payload: SubmissionPayload, options?: { signal?: AbortSignal }) => Promise<SubmissionResult>;
