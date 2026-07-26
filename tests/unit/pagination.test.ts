import { describe, expect, it } from "vitest";
import { paginationSchema, toSkipTake } from "@/schemas/common";

describe("pagination", () => {
  it("constrains the page size", () =>
    expect(paginationSchema.safeParse({ perPage: 101 }).success).toBe(false));
  it("converts a page to a prisma offset", () =>
    expect(toSkipTake(paginationSchema.parse({ page: 3, perPage: 25 }))).toEqual({
      skip: 50,
      take: 25,
    }));
});
