exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: 'Login' })
    }
    async gotoLoginPage() {
        //Navigate to the website
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }

    async enterUsername(Username) {
        await this.username_textbox.fill(Username)
    }

    async enterPassword(Password) {
        await this.password_textbox.fill(Password)
    }
    
    async clickOnLogin() {
        await this.login_button.click()
    }
}