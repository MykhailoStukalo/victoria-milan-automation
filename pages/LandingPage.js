import { BasePage } from './BasePage';
export class LandingPage extends BasePage {
    constructor(page) {
        super(page);
        this.loginButton = page.locator('.button-login.header-desktop-top__login-button');
        this.languageSelector = page.locator('.header-desktop-top__lang_selector.button-country-selector');
        this.germanLanguageOption = page.locator('.country-selector-modal').getByText('Deutsch', {exact: true});
        this.germanMatchesCta = page.getByText('Sieh dir deine Matches an', {exact: true});


    }

    async clickLogin() {
    await this.loginButton.click();
}
}

