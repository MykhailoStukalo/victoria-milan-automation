import {test, expect} from '@playwright/test'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {RegistrationPage} from '../pages/RegistrationPage';

test('TC-029 Verify Gender selection options are displayed', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await expect (registrationPage.genderMan).toBeVisible();
    await expect (registrationPage.genderWoman).toBeVisible();
});

test('TC-030 Verify male gender selection', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);
    
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await expect (registrationPage.completedSubStep.getByText('Man', {exact: true})).toBeVisible();
    await expect (registrationPage.whoIsLabel).toBeVisible();
    
});

test('TC-031 Verify Registration Step 2 UI elements are displayed', async ({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await expect (registrationPage.whoIsLabel).toBeVisible();
    await expect (registrationPage.relationshipMarried).toBeVisible();
    await expect (registrationPage.relationshipAttached).toBeVisible();
    await expect (registrationPage.relationshipSingle).toBeVisible();
    await expect (registrationPage.relationshipDivorced).toBeVisible();
    await expect (registrationPage.completedSubStep.getByText('Man', {exact: true})).toBeVisible();

});