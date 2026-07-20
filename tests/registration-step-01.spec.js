import {test, expect} from '@playwright/test'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {RegistrationPage} from '../pages/RegistrationPage';
import {RegistrationStep1Page} from '../pages/RegistrationStep1Page';

test('TC-029 Verify Gender selection options are displayed', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationStep1Page = new RegistrationStep1Page(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await expect (registrationStep1Page.genderMan).toBeVisible();
    await expect (registrationStep1Page.genderWoman).toBeVisible();
});

test('TC-030 Verify male gender selection', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationStep1Page = new RegistrationStep1Page(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationStep1Page.genderMan.click();
    await expect (registrationStep1Page.completedSubStep.getByText('Man', {exact: true})).toBeVisible();
});

test('TC-031 Verify Registration Step 2 UI elements are displayed', async ({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationStep1Page = new RegistrationStep1Page(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationStep1Page.genderMan.click();
    await expect (registrationStep1Page.relationshipDivorced).toBeVisible();
    await expect (registrationStep1Page.relationshipMarried).toBeVisible();
    await expect (registrationStep1Page.relationshipAttached).toBeVisible();
    await expect (registrationStep1Page.relationshipSingle).toBeVisible();

});