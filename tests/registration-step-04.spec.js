import {test, expect} from '@playwright/test'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {RegistrationPage} from '../pages/RegistrationPage';
import {applyCaptchaTestMode} from '../helpers/captcha.local.js';


test('TC-035 Verify Registration Step 4 UI elements are displayed', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await registrationPage.relationshipSingle.click();
    await registrationPage.interestedInWomen.click();

    await expect(registrationPage.completedSubStep.getByText('Man', {exact: true})).toBeVisible();
    await expect(registrationPage.completedSubStep.getByText('Single', {exact: true})).toBeVisible();
    await expect(registrationPage.completedSubStep.getByText('Women', {exact: true})).toBeVisible();
    await expect(registrationPage.emailInput).toBeVisible();
    await expect(registrationPage.marketingAgreeButton).toBeVisible();
    await expect(registrationPage.marketingDisagreeButton).toBeVisible();
    await expect(registrationPage.reCaptchaFrame).toBeVisible();
    await expect(registrationPage.continueButtonAfterEmail).toBeVisible();
    await expect(registrationPage.termsAndConditionsCheckbox).toBeVisible();
});

test('TC-036 Verify valid email submission', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);
    const timestamp = Date.now();
    const uniqueEmail = `testNazik+${timestamp}@gmail.com`;

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await applyCaptchaTestMode(page);
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await registrationPage.relationshipSingle.click();
    await registrationPage.interestedInWomen.click();
    await registrationPage.emailInput.fill(uniqueEmail);
    await registrationPage.termsAndConditionsCheckbox.check();
    await registrationPage.continueButtonAfterEmail.click();

    await expect(registrationPage.userNameField).toBeVisible();
});

test('TC-037 Verify registration with an invalid email format', async ({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await applyCaptchaTestMode(page);
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await registrationPage.relationshipSingle.click();
    await registrationPage.interestedInWomen.click();
    await registrationPage.emailInput.fill('test@');
    await registrationPage.termsAndConditionsCheckbox.check();
    await registrationPage.continueButtonAfterEmail.click();
    await expect(registrationPage.errorMessageInvalidEmail).toBeVisible();
});

test('TC-038 Verify registration with an empty email field', async ({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await applyCaptchaTestMode(page);
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await registrationPage.relationshipSingle.click();
    await registrationPage.interestedInWomen.click();
    await registrationPage.emailInput.fill('');
    await registrationPage.termsAndConditionsCheckbox.check();
    await registrationPage.continueButtonAfterEmail.click();

    await expect(registrationPage.errorMessageRequired).toBeVisible();
});

test('TC-039 Verify registration without accepting the Terms of Use, Privacy Policy, and Cookie Policy', async ({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);
    const timestamp = Date.now();
    const uniqueEmail = `testNazik+${timestamp}@gmail.com`;


    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await applyCaptchaTestMode(page);
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await registrationPage.relationshipSingle.click();
    await registrationPage.interestedInWomen.click();
    await registrationPage.emailInput.fill(uniqueEmail);
    await registrationPage.continueButtonAfterEmail.click();

    await expect(registrationPage.errorMessageTermsRequired).toBeVisible();
});

test('TC-040 Verify registration without completing the reCAPTCHA', async ({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);
    const timestamp = Date.now();
    const uniqueEmail = `testNazik+${timestamp}@gmail.com`;

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await registrationPage.relationshipSingle.click();
    await registrationPage.interestedInWomen.click();
    await registrationPage.emailInput.fill(uniqueEmail);
    await registrationPage.termsAndConditionsCheckbox.check();
    await registrationPage.continueButtonAfterEmail.click();

    await expect(registrationPage.errorMessageCaptchaRequired).toBeVisible();
});


