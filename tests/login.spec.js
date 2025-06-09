import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login"
import { log } from "console";

test("Login Page", async ({ page }) => {

    const Login = new LoginPage(page)

    await Login.gotoLoginPage();
    //Verify the URL of the page
    await expect(page).toHaveURL(/.*login/);
    const url = await page.url();
    console.log("The URL is: " + url);


    //Verify the title of the page
    await expect(page).toHaveTitle("The Internet");
    const title = await page.title();
    console.log("The Title is: " + title);

    //Verify that the username textbox is empty.
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeEmpty();

    //Enter the username
    await Login.enterUsername("tomsmith");

    //Verify that the username textbox name is visible.
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible("tomsmith");

    //Verify that the password textbox is empty.
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();

    //Enter the password
    await Login.enterPassword("SuperSecretPassword!");

    //Verify that the password textbox name is visible.
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible("SuperSecretPassword!");

    //Verify that the login button is Visible.
    await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();

    //Verify that the login button is active and clickable.
    await expect(page.getByRole('button', { name: ' Login' })).toBeEnabled();

    //Click the Login button
    await Login.clickOnLogin();
    await page.pause()







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