/** Removes control characters and normalizes user supplied plain text. Rich HTML is never accepted by APIs. */
export function sanitizePlainText(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

export function safeFilename(value: string) {
  return value
    .normalize("NFKC")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .slice(0, 120);
}
