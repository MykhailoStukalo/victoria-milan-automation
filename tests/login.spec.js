import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {applyCaptchaTestMode} from '../helpers/captcha.local.js';

test('TC-009 Verify Language Selector is displayed on the Login Page', async({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await expect (loginPage.languageSelectorLogin).toBeVisible();
});

test('TC-010 Verify Join VictoriaMilan button is displayed', async({page}) =>{
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await expect (loginPage.joinVictoriaMilanbutton).toBeVisible();
});

test('TC-011 Verify Login Form elements are displayed', async({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await expect (loginPage.emailInput).toBeVisible();
    await expect (loginPage.passwordInput).toBeVisible();
    await expect (loginPage.loginButton).toBeVisible();
    await expect (loginPage.forgotLoginOrPassword).toBeVisible();
});

test('TC-012 Verify Show/Hide Password functionality', async({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
    await loginPage.passwordInput.fill('Test123');
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
    await loginPage.showHidePasswordButton.click();
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'text');
    await expect(loginPage.passwordInput).toHaveValue('Test123');
    await loginPage.showHidePasswordButton.click();
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
});

test('TC-013 Verify Log In button is disabled by default', async ({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await expect(loginPage.loginButton).toBeDisabled();
});

test('TC-015 Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cookieBanner = new CookieBanner(page);
  const landingPage = new LandingPage(page);

  const email = process.env.VM_USER_EMAIL;
  const password = process.env.VM_USER_PASSWORD;

  if (!email || !password) {
    throw new Error('VM_USER_EMAIL or VM_USER_PASSWORD is missing in .env');
  }

  await landingPage.open('https://www.victoriamilan.com/');
  await cookieBanner.acceptCookies();

  await applyCaptchaTestMode(page);

  await landingPage.clickLogin();

  await loginPage.login(email, password);

  await expect(page).toHaveURL(/\/app(\/|$)/);
});

test('TC-017 Verify login with invalid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await applyCaptchaTestMode(page);
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await loginPage.emailInput.fill('test@example.com');
    await loginPage.passwordInput.fill('pas123');
    await loginPage.loginButton.click();
    await expect (loginPage.wrongLoginOrPassword).toBeVisible();
});

test('TC-018 Verify login behavior when required fields are empty', async ({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await applyCaptchaTestMode(page);
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
    await expect (loginPage.emailInput).toHaveValue('');
    await expect (loginPage.passwordInput).toHaveValue('');
    await expect (loginPage.loginButton).toBeDisabled();
});

test('TC-019 Verify Log In button remains disabled when CAPTCHA is not completed', async ({page}) => {
    const loginPage = new LoginPage(page);
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await applyCaptchaTestMode(page);
    await cookieBanner.acceptCookies();
    await landingPage.clickLogin();
}

)