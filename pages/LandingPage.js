import { BasePage } from './BasePage';
export class LandingPage extends BasePage {
    constructor(page) {
        super(page);
        this.loginButton = page.locator('.button-login.header-desktop-top__login-button');
    }

    async clickLogin() {
    await this.loginButton.click();
}
}

