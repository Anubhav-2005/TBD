import { NextRequest } from "next/server";
import { z } from "zod";
import { db } from "@/database/client";
import { handleApiError, ok, parseBody, protectApi } from "@/lib/security/request";
import { sanitizePlainText } from "@/lib/security/sanitize";
const schema = z.object({
  name: z.string().min(2).max(100).transform(sanitizePlainText),
  email: z
    .string()
    .email()
    .max(254)
    .transform((value) => value.toLowerCase()),
  company: z
    .string()
    .max(120)
    .optional()
    .transform((value) => (value ? sanitizePlainText(value) : undefined)),
  message: z.string().min(12).max(4000).transform(sanitizePlainText),
  source: z.string().max(80).transform(sanitizePlainText),
});
export async function POST(request: NextRequest) {
  try {
    await protectApi(request, 10);
    const body = await parseBody(request, schema);
    const organization = await db.organization.findFirst({
      orderBy: { createdAt: "asc" },
      select: { id: true },
    });
    if (!organization)
      return Response.json(
        { error: { code: "SETUP_REQUIRED", message: "Public lead capture is not configured." } },
        { status: 503 },
      );
    const [contact] = await db.$transaction([
      db.contactForm.create({
        data: {
          organizationId: organization.id,
          name: body.name,
          email: body.email,
          message: body.message,
          metadata: { company: body.company, source: body.source },
        },
      }),
      db.lead.create({
        data: {
          organizationId: organization.id,
          name: body.name,
          email: body.email,
          company: body.company,
          source: body.source,
          notes: body.message,
        },
      }),
    ]);
    return ok({ id: contact.id }, { status: 201 });
  } catch (error) {
    return handleApiError(error);
  }
}
