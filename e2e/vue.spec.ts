import { expect, test } from "@playwright/test";

// See here how to get started:
// https://playwright.dev/docs/intro
test("visits the app root url", async ({ page }) => {
  await page.goto("/");
});

test("validates the label for main page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Product")).toBeVisible();
  await page.locator("#productName").fill("Lait");
  await expect(page.getByLabel("Product")).toBeEditable({
    editable: false,
  });
});
