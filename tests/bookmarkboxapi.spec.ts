import { test, expect } from "@playwright/test";
import { title } from "process";

test("has title", async ({ page }) => {
  await page.goto("https://account.box.com/login");
  await page.locator("#login-email").fill("nipico5848@ahieh.com");
  await page.click("#login-submit");
  await page.locator("#password-login").fill("nipico@123");
  await page.click("#login-submit-password");
  await page.getByText("new").click();
//   let e=page.locator("div.item-name-holder > div.name-row > div > a").inputValue();
//   var text=await page.locator("#contextmenutarget31 > div > div.ReactVirtualized__Table__rowColumn.file-list-name > div > div.item-name-holder > div.name-row > div").innerText();
// var text=await page.locator("div.TableRow-focusBorder",{has:page.locator("//a[text()='demofilebook']")});  
// console.log(text);
//   e.getByPlaceholder
  // if( text!="demofilebook"){
  await page.locator(" div > li:nth-child(8) > span").click();
  await page.locator("div:nth-child(1) > label > input[type=text]").fill("demofilebook");
  await page.locator("button.btn.btn-primary > span > span").click();
//   await page.locator("#contextmenutarget31 > div > div.ReactVirtualized__Table__rowColumn.file-list-name > div > div.item-name-holder > div.name-row > div").hover();
     await page.locator("div.TableRow-focusBorder",{has:page.locator("//a[text()='demofilebook']")}).hover();
  await page.locator("((//*[@class='actions item-list-actions'])[1]//span/button)[1]").click();
  await page.locator("(//*[text()='Trash'])[2]").click();
  await page.locator("button.btn.btn-primary").click();
//   await page.close();
});
// test('has title',{tag:['@playwright']},async ({ page }) => {

//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   // await expect(page).toHaveTitle(/Playwright/);
// });
// test('get started link' , { tag: ['@hdfc', '@slow' ] }, async ({ page }) => {
    
//   await page.goto('https://www.hdfcbank.com/');

//   // Click the get started link.
//   await page.locator('//*[@class="desktop-login position-find btn btn-primary login-btn hide-in-mobileApp ng-scope"]').click();

//   // Expects page to have a heading with the name of Installation.
//   // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });