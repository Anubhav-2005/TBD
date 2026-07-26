import { z } from "zod";

export const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  perPage: z.coerce.number().int().min(1).max(100).default(25),
  sort: z
    .string()
    .regex(/^[a-zA-Z]+:(asc|desc)$/)
    .optional(),
  query: z.string().trim().max(120).optional(),
});

export type PaginationInput = z.infer<typeof paginationSchema>;
export function toSkipTake({ page, perPage }: PaginationInput) {
  return { skip: (page - 1) * perPage, take: perPage };
}
