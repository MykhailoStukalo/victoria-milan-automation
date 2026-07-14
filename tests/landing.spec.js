
import { test,expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';
import { CookieBanner } from '../pages/CookieBanner';
import { LoginPage } from '../pages/LoginPage';
import { count } from 'node:console';
import { RegistrationPage } from '../pages/RegistrationPage';
import { execPath } from 'node:process';

test('TC-001 Verify Language Selector is displayed', async({page}) =>{
    const landingPage = new LandingPage(page);

    await landingPage.open('https://www.victoriamilan.com/');

    await expect(landingPage.languageSelector).toBeVisible();
}
)

test('TC-002 Verify user can change interface language', async({page}) => {
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

test('TC-003 Verify Login button is displayed', async({page}) => {
    const landingPage = new LandingPage(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await expect(landingPage.loginButton).toBeVisible();

}
)

test('TC-004 Verify user can navigate to Login Page', async({page}) => {
    const landingPage = new LandingPage(page);
    const cookieBanner = new CookieBanner(page);
    const loginPage = new LoginPage(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    await landingPage.loginButton.click();
    await expect(page).toHaveURL('https://www.victoriamilan.com/en_US/?nc#/welcome/login');
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
});

test('TC-005 Verify all CTA buttons are displayed', async({page}) => {
    const landingPage = new LandingPage(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await expect(landingPage.ctaButtons).toHaveCount(5);
    const buttonCount = await landingPage.ctaButtons.count();
    for (let i = 0; i < buttonCount; i++) {
        await expect(landingPage.ctaButtons.nth(i)).toBeVisible();
    }
}

)

test('TC-006 Verify each CTA button opens Registration Step 1', async({page}) => {
    const landingPage = new LandingPage(page);
    const registrationPage = new RegistrationPage (page);
    const cookieBanner = new CookieBanner(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await cookieBanner.acceptCookies();
    for (let i = 0; i < 5; i++) {
        await landingPage.open('https://www.victoriamilan.com/');
        const currentCta = landingPage.ctaButtons.nth(i);
        await currentCta.click();
        await expect(page).toHaveURL(/welcome\/create-account/);
        await expect(registrationPage.registrationTitle).toBeVisible();
    }
}
)

test('TC-007 Verify all footer links are displayed', async({page}) => {
    const landingPage = new LandingPage(page);
    await landingPage.open('https://www.victoriamilan.com/');
    await expect(landingPage.footerLinks).toHaveCount(10);
    for (let i = 0; i < 10; i++) {
        await expect(landingPage.footerLinks.nth(i)).toBeVisible();
    }
}
)

test('TC-008 Verify each footer link opens the correct page', async({page}) => {
   const landingPage = new LandingPage(page);
   const cookieBanner = new CookieBanner(page);
   await landingPage.open('https://www.victoriamilan.com/');
   await cookieBanner.acceptCookies();
    const expectedUrls = [
        "https://www.victoriamilan.com/en_US/sitemap/show",
        /^https:\/\/www\.loverevenue\.com\//,
        "https://www.victoriamilan.com/articles/en/",
        "https://www.victoriamilan.com/en_US/static/about-us",
        "https://www.victoriamilan.com/en_US/#/leadership",
        "https://www.victoriamilan.com/help-center",
        "https://www.victoriamilan.com/en_US/static/eu-privacy-statement",
        "https://www.victoriamilan.com/en_US/static/ip-policy",
        "https://www.victoriamilan.com/en_US/static/eu-terms-and-conditions",
        "https://www.victoriamilan.com/en_US/anti-sex-trafficking"     
    ]
    for (let i = 0; i < expectedUrls.length; i++) {
        const currentFooterLink = landingPage.footerLinks.nth(i);
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            currentFooterLink.click()
        ]
        )
    await expect(newPage).toHaveURL(expectedUrls[i]);
    await newPage.close();

    }

}
)

