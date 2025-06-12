import { test, expect } from "@playwright/test";
//test.use({ viewport: { width: 1000, height: 1080 } })
import { log } from "node:console";
test("Verify Error Message", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveURL(/login/);
    const url = await page.url();
    console.log("The URL is: " + url);

    await expect(page).toHaveTitle(/HRM/)
    const title = await page.title()
    console.log("The Title is: " + title);
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log("The Width of the Page is: " + await page.viewportSize().width)
    console.log("The Height of the Page is: " + await page.viewportSize().height)

    await page.getByPlaceholder("Username").fill("Admin");
    const username = await page.getByPlaceholder("Username").inputValue();
    console.log('The Username is :', username);
    // Screenshot of the username input field
    await page.getByPlaceholder("Username").screenshot({ path: 'username.png' });

    await page.getByPlaceholder("Password").fill("admin1231");
    const password = await page.getByPlaceholder("Password").inputValue();
    console.log('The Password is :', password);
    // Screenshot of the password input field
    await page.getByPlaceholder("Password").screenshot({ path: 'password.png' });

    await page.locator("//*[@type='submit']").click();
    const errorMessage = await page.getByText(/credentials/).textContent();
    //const errorMessage=await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("The Error Message is: " + errorMessage);

    //Verifying the Partial message
    expect(errorMessage.includes("Invalid")).toBeTruthy();

    //Verifying the Full message
    expect(errorMessage === "Invalid credentials").toBeTruthy();



})
