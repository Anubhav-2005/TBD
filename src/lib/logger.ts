import pino from "pino";

export const logger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  redact: {
    paths: ["req.headers.authorization", "password", "token", "*.token", "*.secret"],
    censor: "[REDACTED]",
  },
  ...(process.env.NODE_ENV === "development" ? { transport: { target: "pino-pretty" } } : {}),
});
