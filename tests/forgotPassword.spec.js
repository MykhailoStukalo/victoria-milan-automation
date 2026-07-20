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

test('TC-025 Verify Get Password button remains disabled when CAPTCHA is not completed', async({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const forgotPassword = new ForgotPassword(page);
    const email = process.env.VM_USER_EMAIL;
    
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await loginPage.forgotLoginOrPassword.click();
    await forgotPassword.forgotPasswordEmailInput.fill(email);
    await expect(forgotPassword.getPassword).toBeDisabled();
});

test('TC-028 Verify "Try different symbols" refreshes the CAPTCHA', async({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const forgotPassword = new ForgotPassword(page);
    
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await loginPage.forgotLoginOrPassword.click();
    const oldSrc = await forgotPassword.captchaImage.getAttribute('src');
    await forgotPassword.tryDifferentSymbols.click();
    const newSrc = await forgotPassword.captchaImage.getAttribute('src');
    expect(newSrc).not.toBe(oldSrc);
});
