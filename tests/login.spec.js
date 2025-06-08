import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login"

test("Login Page", async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.gotoLoginPage();
    await expect(page).toHaveURL(/.*login/);
    const url = await page.url();
    console.log("The URL is: " + url);

    await expect(page).toHaveTitle("The Internet");
    const title = await page.title();
    console.log("The Title is: " + title);

    await expect(page.getByRole('textbox', { name: 'Username' })).toBeEmpty();
    await Login.enterUsername("tomsmith");
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible("tomsmith");

    await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();
    await Login.enterPassword("SuperSecretPassword!");
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible("SuperSecretPassword!");

    await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();
    await expect(page.getByRole('button', { name: ' Login' })).toBeEnabled();
    await Login.clickOnLogin();


    // await page.goto("https://the-internet.herokuapp.com/login");
    // await expect(page).toHaveURL(/.*login/);
    // const url = await page.url();

    // await expect(page).toHaveTitle("The Internet");
    // const title = await page.title();

    // await page.getByRole('textbox', { name: 'Username' }).fill("tomsmith");
    // await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible("tomsmith");

    // await page.getByRole('textbox', { name: 'Password' }).fill("SuperSecretPassword!");
    // await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible("SuperSecretPassword!");

    // await expect(page.getByRole('button', { name: ' Login' })).toBeEnabled();
    // await page.getByRole('button', { name: ' Login' }).click();
    // await page.pause();


    // console.log("The Title is: " + title);
    // await expect(page).toHaveScreenshot();

    //await page.close();
});