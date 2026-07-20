import {test, expect} from '@playwright/test'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {RegistrationPage} from '../pages/RegistrationPage';
import {RegistrationStep1Page} from '../pages/RegistrationStep1Page';
import {RegistrationStep2Page} from '../pages/RegistrationStep2Page';
import {RegistrationStep3Page} from '../pages/RegistrationStep3Page';

test('TC-032 Verify relationship status selection', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationStep1Page = new RegistrationStep1Page(page);
    const registrationStep2Page = new RegistrationStep2Page(page);
    const registrationStep3Page = new RegistrationStep3Page(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationStep1Page.genderMan.click();
    await registrationStep2Page.relationshipSingle.click();
    await expect (registrationStep1Page.completedSubStep.getByText('Man', {exact: true})).toBeVisible();
    await expect (registrationStep2Page.relationshipSingle).toBeVisible();
    await expect (registrationStep3Page.interestedInOptions.getByText('Men', {exact: true})).toBeVisible();
    await expect (registrationStep3Page.interestedInOptions.getByText('Women', {exact: true})).toBeVisible();
    await expect (registrationStep3Page.interestedInOptions.getByText('Both', {exact: true})).toBeVisible();
});



