import type { SubmissionAdapter } from "@/lib/forms/types";

/**
 * Formspree adapter (https://help.formspree.io/hc/en-us/articles/360013470814).
 *
 * Contract relied on: POST JSON with `Accept: application/json`.
 *  - Accepted: 2xx with body `{ "ok": true, ... }`.
 *  - Rejected: 4xx with `{ "errors": [{ "field"?, "message", "code"? }] }`
 *    or `{ "error": "..." }`.
 * A 2xx without `ok: true` is not treated as success.
 */
export const submitToFormspree: SubmissionAdapter = async (endpoint, payload, options) => {
  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: options?.signal,
    });
  } catch {
    return { status: "error", reason: "network" };
  }

  let body: unknown = null;
  try {
    body = await response.json();
  } catch {
    // Non-JSON body: handled below as an unexpected response.
  }

  if (response.ok) {
    return isRecord(body) && body.ok === true ? { status: "success" } : { status: "error", reason: "unexpected-response" };
  }

  if (!isRecord(body)) return { status: "error", reason: "unexpected-response" };

  const fieldErrors: Record<string, string> = {};
  const formMessages: string[] = [];
  if (Array.isArray(body.errors)) {
    for (const error of body.errors) {
      if (!isRecord(error) || typeof error.message !== "string") continue;
      if (typeof error.field === "string" && error.field) fieldErrors[error.field] = error.message;
      else formMessages.push(error.message);
    }
  }
  if (typeof body.error === "string") formMessages.push(body.error);

  return {
    status: "error",
    reason: "rejected",
    ...(Object.keys(fieldErrors).length ? { fieldErrors } : {}),
    ...(formMessages.length ? { message: formMessages.join(" ") } : {}),
  };
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
