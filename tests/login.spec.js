import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login"
import { LogOutPage } from "../pages/logout/"
import { log } from "node:console";


test("Login Page", async ({ page }) => {

    const Login = new LoginPage(page)
    const LogOut = new LogOutPage(page)

    await Login.gotoLoginPage();
    //Verify the URL of the page
    //await expect(page).toHaveURL(/.*login/);
    await expect(page).toHaveURL(/login/);
    const url = await page.url();
    console.log("The URL is: " + url);


    //Verify the title of the page
    await expect(page).toHaveTitle("The Internet");
    const title = await page.title();
    console.log("The Title is: " + title);

    //Verify that the username textbox is empty.
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeEmpty();

    //Enter the username
    await Login.enterUsername('tomsmith');
    // await page.getByRole('textbox', { name: 'Username' }).pressSequentially("tomsmith", {delay: 500});
    //Verify that the username is visible.
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible("tomsmith");

    //Verify that the password textbox is empty.
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeEmpty();

    //Enter the password
    await Login.enterPassword("SuperSecretPassword!");

    //Verify that the password name is visible.
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible("SuperSecretPassword!");
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue("SuperSecretPassword!");
    //Verify that the login button is Visible.
    await expect(page.getByRole('button', { name: ' Login' })).toBeVisible();

    //Verify that the login button is active and clickable.
    await expect(page.getByRole('button', { name: ' Login' })).toBeEnabled();

    //Click On the Login button
    await Login.clickOnLogin();

    //Verify the URL of the page
    //await expect(page).toHaveURL(/.*secure/);
    await expect(page).toHaveURL(/secure/);
    const url1 = await page.url();
    console.log("The URL is: " + url1);

    //Verify that the name  is Visible.
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
    const textname = await page.getByRole('heading', { name: 'Secure Area', exact: true }).textContent()
    console.log("The Visible Text is: " + textname);

    //Using Relative xpath
    //await expect(page.locator("//h2[normalize-space()='Secure Area']")).toBeVisible();
    //const textname = await page.locator("//h2[normalize-space()='Secure Area']").textContent()
   // console.log("The Visible Text is: " + textname);

    //await expect(page).toHaveScreenshot();

    //await page.pause();
    await LogOut.clickOnLogOut();
    await page.close();
});