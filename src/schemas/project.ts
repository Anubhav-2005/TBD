import { z } from "zod";

export const createProjectSchema = z.object({
  clientId: z.string().cuid(),
  name: z.string().trim().min(2).max(140),
  slug: z
    .string()
    .trim()
    .toLowerCase()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  description: z.string().trim().max(10_000).optional(),
  budget: z.coerce.number().nonnegative().max(100_000_000).optional(),
  dueDate: z.coerce.date().optional(),
});
