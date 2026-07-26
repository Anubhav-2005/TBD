import { test, expect } from "@playwright/test";
test.skip("health endpoint requires a provisioned database", async ({ request }) => {
  const response = await request.get("/api/health");
  expect(response.ok()).toBeTruthy();
});
