import { test, expect } from "@playwright/test";
import { title } from "process";
[
    { name: 'standard_user', expected: 'secret_sauce' },
    { name: 'locked_out_user', expected: 'secret_sauce' },
    { name: 'problem_user', expected: 'secret_sauce' },
  ].forEach(({ name, expected }) => {
    test(`testing with ${name}`, async ({ page }) => {
        await page.goto("https://www.saucedemo.com/v1/index.html");

        await page.locator("#user-name").fill(`${name}`);
        
        await page.click("#password");
          
        await page.locator("#password").fill(`${expected}`);
        
        await page.click("#login-button");
    });
});