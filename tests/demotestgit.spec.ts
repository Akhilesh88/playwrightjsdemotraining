import { test, expect } from "@playwright/test";
import { title } from "process";

test("has title", async ({ page }) => {
  await page.goto("https://account.box.com/login");
  await page.locator("#login-email").type("nipico5848@ahieh.com");
  await page.click("#login-submit");
  // await page.locator("#password-login").type("nipico@123");
  // await page.getByRole("input").fill("nipico@123");
  await page.locator("#password-login").fill("nipico@123");
  
  // await page.waitForSelector('input[id="address"]');
  // await page.type('input[id="address"]', "23,South Avenue Street,NY,USA");
  await page.click("#login-submit-password");
  await expect(page).toHaveTitle("All Files | Powered by Box");
  const titile = await page.title();
  console.log(titile);
  // await
  await page.close();
});
