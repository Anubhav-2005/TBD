import { NextRequest, NextResponse } from "next/server";
import { ZodError, type z } from "zod";
import { logger } from "@/lib/logger";
import { rateLimit } from "@/lib/security/rate-limit";

export type ApiSuccess<T> = { data: T; meta?: Record<string, unknown> };
export type ApiFailure = { error: { code: string; message: string; details?: unknown } };

export function ok<T>(data: T, init?: ResponseInit, meta?: Record<string, unknown>) {
  return NextResponse.json<ApiSuccess<T>>({ data, ...(meta ? { meta } : {}) }, init);
}

export function fail(code: string, message: string, status = 400, details?: unknown) {
  return NextResponse.json<ApiFailure>(
    { error: { code, message, ...(details ? { details } : {}) } },
    { status },
  );
}

export async function parseBody<T extends z.ZodType>(
  request: NextRequest,
  schema: T,
): Promise<z.infer<T>> {
  try {
    return schema.parse(await request.json());
  } catch (error) {
    if (error instanceof ZodError) throw new RequestValidationError(error.flatten());
    throw new RequestValidationError({ formErrors: ["Invalid JSON"], fieldErrors: {} });
  }
}

export function assertSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && new URL(origin).host !== host)
    throw new RequestValidationError({ formErrors: ["Invalid request origin"], fieldErrors: {} });
}

export async function protectApi(request: NextRequest, limit = 60) {
  const identifier = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "anonymous";
  const result = await rateLimit(`${identifier}:${request.nextUrl.pathname}`, limit);
  if (!result.success) throw new RateLimitError(result.reset);
  if (!["GET", "HEAD", "OPTIONS"].includes(request.method)) assertSameOrigin(request);
}

export class RequestValidationError extends Error {
  constructor(public readonly details: unknown) {
    super("Validation failed");
  }
}
export class RateLimitError extends Error {
  constructor(public readonly retryAfter: number) {
    super("Rate limit exceeded");
  }
}

export function handleApiError(error: unknown) {
  if (error instanceof RequestValidationError)
    return fail("VALIDATION_ERROR", error.message, 422, error.details);
  if (error instanceof RateLimitError)
    return fail("RATE_LIMITED", error.message, 429, { retryAfter: error.retryAfter });
  logger.error({ err: error }, "Unhandled API error");
  return fail("INTERNAL_ERROR", "An unexpected error occurred.", 500);
}
