import {test, expect} from '@playwright/test'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {RegistrationPage} from '../pages/RegistrationPage';

test('TC-032 Verify relationship status selection', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationPage = new RegistrationPage(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationPage.genderMan.click();
    await registrationPage.relationshipSingle.click();
    await expect (registrationPage.completedSubStep.getByText('Man', {exact: true})).toBeVisible();
    await expect (registrationPage.relationshipSingle).toBeVisible();
    await expect (registrationPage.interestedInOptions.getByText('Men', {exact: true})).toBeVisible();
    await expect (registrationPage.interestedInOptions.getByText('Women', {exact: true})).toBeVisible();
    await expect (registrationPage.interestedInOptions.getByText('Both', {exact: true})).toBeVisible();
});



