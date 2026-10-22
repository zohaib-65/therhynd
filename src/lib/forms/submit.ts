import type { FormKey, SubmissionPayload, SubmissionResult } from "@/lib/forms/types";

/** How long the loader shows while no backend is connected. Remove with the placeholder below. */
const PLACEHOLDER_DELAY_MS = 800;

/**
 * Sends one form's validated data. This is the only place to connect the
 * backend: replace the body with the API call for `form` (sending `payload`)
 * and map its response to a SubmissionResult. Every form, its loader and its
 * toasts already work from that result.
 *
 * Until then nothing is sent and every form reports "not-connected", never a
 * made-up success.
 */
export async function submitForm(form: FormKey, payload: SubmissionPayload): Promise<SubmissionResult> {
  void form;
  void payload;
  await new Promise((resolve) => setTimeout(resolve, PLACEHOLDER_DELAY_MS));
  return { status: "not-connected" };
}
