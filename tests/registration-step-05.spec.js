import {test, expect} from '@playwright/test'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {RegistrationPage} from '../pages/RegistrationPage';
import {applyCaptchaTestMode} from '../helpers/captcha.local.js';
import {testUsername} from '../test-data/registrationData.js';

test('TC-041 Verify Registration Step 5 UI elements are displayed', async ({page}) => {
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

    await expect(registrationPage.completedSubStep.getByText('Man', {exact: true})).toBeVisible();
    await expect(registrationPage.completedSubStep.getByText('Single', {exact: true})).toBeVisible();
    await expect(registrationPage.completedSubStep.getByText('Women', {exact: true})).toBeVisible();
    await expect(registrationPage.completedSubStep.getByText(uniqueEmail, {exact: true})).toBeVisible();
    await expect(registrationPage.userNameField).toBeVisible();
    await expect(registrationPage.continueButtonAfterUsername).toBeVisible();
});

test('TC-042 Verify successful completion of Registration Step 5', async ({page}) => {
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
    await registrationPage.userNameField.fill(testUsername);
    await registrationPage.continueButtonAfterUsername.click();

    await expect(registrationPage.passwordInput).toBeVisible();

});