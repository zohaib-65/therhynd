import { formEndpoints } from "@/lib/forms/endpoints";
import { submitToFormspree } from "@/lib/forms/formspree";
import type { FormKey, SubmissionAdapter, SubmissionPayload, SubmissionResult } from "@/lib/forms/types";

/**
 * Send a form's validated data to its configured endpoint. This is the one
 * place that knows which provider is used; swap `adapter` to change it.
 * Returns "not-configured" without a network request when the form has no
 * endpoint, so the site still works before a provider is set up.
 */
export async function submitForm(
  form: FormKey,
  payload: SubmissionPayload,
  {
    endpoints = formEndpoints,
    adapter = submitToFormspree,
    signal,
  }: { endpoints?: Partial<Record<FormKey, string | undefined>>; adapter?: SubmissionAdapter; signal?: AbortSignal } = {},
): Promise<SubmissionResult> {
  const endpoint = endpoints[form];
  if (!endpoint) return { status: "not-configured" };
  return adapter(endpoint, payload, { signal });
}
