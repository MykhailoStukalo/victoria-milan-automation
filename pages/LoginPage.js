import {BasePage} from './BasePage';
export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('.login-sep21__cta');
        this.languageSelectorLogin = page.locator('.login-sep21__lang-selector.button-country-selector');
        this.joinVictoriaMilanbutton = page.locator('.login-sep21__button-signup');
        this.forgotLoginOrPassword = page.locator('.login-sep21__bottom-links a');
        this.showHidePasswordButton = page.locator('.login-sep21__password-eye');
        this.wrongLoginOrPassword = page.getByText('Wrong login or password',{ exact: true });
        

        
    }

    async login(email, password) {
await this.emailInput.fill(email);
await this.passwordInput.fill(password);
await this.loginButton.click();
    }
}

