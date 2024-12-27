import { test} from "@playwright/test";

test('abc',async({page})=>
    {
await page.goto("https://app.box.com");
 
    await page.locator("id=login-email").fill('nipico5848@ahieh.com');
 
    await page.locator("id=login-submit").click();
 
    await page.locator("id=password-login").fill('nipico@123');
    await page.locator("id=login-submit-password").click();
    
    });