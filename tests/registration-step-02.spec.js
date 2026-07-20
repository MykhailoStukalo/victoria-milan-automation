import {test, expect} from '@playwright/test'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
import {RegistrationPage} from '../pages/RegistrationPage';
import {RegistrationStep1Page} from '../pages/RegistrationStep1Page';
import {RegistrationStep2Page} from '../pages/RegistrationStep2Page';

test('TC-032 Verify Registration Step 2 UI elements are displayed', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const registrationStep1Page = new RegistrationStep1Page(page);
    const registrationStep2Page = new RegistrationStep2Page(page);

    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.ctaButtons.first().click();
    await registrationStep1Page.genderMan.click();

});
