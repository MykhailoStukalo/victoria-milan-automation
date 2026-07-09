import {test} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {CookieBanner} from '../pages/CookieBanner';
import {LandingPage} from '../pages/LandingPage';
test('Successful Login', async({page}) => {

const loginPage = new LoginPage(page);
const cookieBanner = new CookieBanner(page);
const landingPage = new LandingPage(page);
await loginPage.open('https://www.victoriamilan.com/');
await cookieBanner.acceptCookies();
await landingPage.clickLogin();
await loginPage.login(
    'victoriamilanuser190922@gmail.com',
    '123456789'
);

});