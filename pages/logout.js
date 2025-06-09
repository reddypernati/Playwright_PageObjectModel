
exports.LogOutPage = class LogOutPage {

        constructor(page) {

        this.page = page
       
        this.login_button = getByRole('link', { name: 'Logout' })
    }
}
