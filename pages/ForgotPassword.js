import { BasePage } from './BasePage';
export class ForgotPassword extends BasePage {
  constructor(page) {
        super(page);
        this.forgotPasswordModal = page.locator('.forgot-password-sep21-modal'); 
        this.forgotPasswordEmailInput = this.forgotPasswordModal.getByPlaceholder('Your email');
        this.forgotPasswordCaptcha = this.forgotPasswordModal.locator('.login-sep21__input_captcha');
        this.tryDifferentSymbols = this.forgotPasswordModal.locator('.forgot-password-sep21-modal__captcha-reload-wrapper a');
        this.getPassword = this.forgotPasswordModal.getByRole('button', {name: 'Get password'});
    }
}