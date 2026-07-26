import { NextRequest } from "next/server";
import { db } from "@/database/client";
import { handleApiError, ok, protectApi } from "@/lib/security/request";

export const runtime = "nodejs";
export async function GET(request: NextRequest) {
  try {
    await protectApi(request, 20);
    await db.$queryRaw`SELECT 1`;
    return ok({ status: "ok", timestamp: new Date().toISOString() });
  } catch (error) {
    return handleApiError(error);
  }
}
