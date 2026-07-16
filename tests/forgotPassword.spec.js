import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {applyCaptchaTestMode} from '../helpers/captcha.local.js';
import { ForgotPassword } from '../pages/ForgotPassword.js';

test('TC-016 Verify Forgot Password modal is displayed', async ({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const forgotPassword = new ForgotPassword(page);
    
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await loginPage.forgotLoginOrPassword.click();
    await expect(forgotPassword.forgotPasswordModal).toBeVisible();
});

test('TC-020 Verify Forgot Password modal elements are displayed', async ({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const forgotPassword = new ForgotPassword(page);
    
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await loginPage.forgotLoginOrPassword.click();
    await expect(forgotPassword.forgotPasswordEmailInput).toBeVisible();
    await expect(forgotPassword.forgotPasswordCaptcha).toBeVisible();
    await expect(forgotPassword.tryDifferentSymbols).toBeVisible();
    await expect(forgotPassword.getPassword).toBeVisible();
    
});

test('TC-021 Verify Get Password button is enabled after entering a valid email and completing CAPTCHA verification', async ({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const forgotPassword = new ForgotPassword(page);
    
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await loginPage.forgotLoginOrPassword.click();
});