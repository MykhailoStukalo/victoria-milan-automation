import {BasePage} from './BasePage';
export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('.login-sep21__cta')
        

        
    }

    async login(email, password) {
await this.emailInput.fill(email);
await this.passwordInput.fill(password);
await this.loginButton.click();
    }
}