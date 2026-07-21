import {test, expect} from '@playwright/test'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {RegistrationPage} from '../pages/RegistrationPage';

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
    await expect(registrationPage.continueButton).toBeVisible();
    await expect(registrationPage.termsAndConditionsCheckbox).toBeVisible();

});


