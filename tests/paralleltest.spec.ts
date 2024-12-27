import { test, expect } from '@playwright/test';

test('has title', {tag:['@playwright']},async ({ page }) => {

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});
test('get started link' , { tag: ['@hdfc', '@slow' ] }, async ({ page }) => {
    
  await page.goto('https://www.hdfcbank.com/');

  // Click the get started link.
  await page.locator('//*[@class="desktop-login position-find btn btn-primary login-btn hide-in-mobileApp ng-scope"]').click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('user can login', { tag: ['@smoke', '@slow' ] }, async ({ page }) => {
  // write test });
  await page.goto('https://www.geeksforgeeks.org/');
});