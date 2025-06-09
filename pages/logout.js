
exports.LogOutPage = class LogOutPage {

        constructor(page) {

        this.page = page
       
        this.logOut_button = page.getByRole('link', { name: 'Logout' })
    }

    async clickOnLogOut() {
        await this.logOut_button.click()
    }
}
