import { NextRequest } from "next/server";
import { z } from "zod";
import { db } from "@/database/client";
import { handleApiError, ok, parseBody, protectApi } from "@/lib/security/request";
const schema = z.object({
  email: z
    .string()
    .email()
    .max(254)
    .transform((value) => value.toLowerCase()),
});
export async function POST(request: NextRequest) {
  try {
    await protectApi(request, 8);
    const { email } = await parseBody(request, schema);
    const organization = await db.organization.findFirst({
      orderBy: { createdAt: "asc" },
      select: { id: true },
    });
    if (!organization)
      return Response.json(
        { error: { code: "SETUP_REQUIRED", message: "Newsletter is not configured." } },
        { status: 503 },
      );
    await db.newsletterSubscriber.upsert({
      where: { organizationId_email: { organizationId: organization.id, email } },
      update: { status: "PENDING" },
      create: { organizationId: organization.id, email },
    });
    return ok({ subscribed: true }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
