
import { test,expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { CookieBanner } from '../pages/CookieBanner';
test('TC-001 Verify Language Selector is displayed', async({page}) =>{
    const landingPage = new LandingPage(page);

    await landingPage.open('https://www.victoriamilan.com/');

    await expect(landingPage.languageSelector).toBeVisible();
}

)

test('TC-002 Verify user can change interface language',async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.languageSelector.click();
    await landingPage.germanLanguageOption.click();
    await expect(page).toHaveURL(/\/de\//);
    await expect(landingPage.germanMatchesCta).toBeVisible();
} 

)