import { settings } from "../data/store.js";

/* Sends a sign-up or order to the Google Sheet, if one is configured.
   Fire-and-forget: the email flow continues whether or not this succeeds. */
export function saveToSheet(kind, data) {
  if (!settings.signupUrl) return Promise.resolve(false);
  return fetch(settings.signupUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({ kind, ...data }),
  })
    .then(() => true)
    .catch(() => false);
}
