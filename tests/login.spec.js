import {test} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {CookieBanner} from '../pages/CookieBanner';
test('Successful Login', async({page}) => {

const loginPage = new LoginPage(page);
await loginPage.open('https://www.victoriamilan.com/en/?nc#/welcome/login');
await loginPage.login(
    'test@test.com',
    'Password123'
);

});