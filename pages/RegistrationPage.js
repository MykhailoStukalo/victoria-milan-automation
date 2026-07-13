import {BasePage} from './BasePage';
export class RegistrationPage extends BasePage {
    constructor (page) {
        super(page);
        this.registrationTitle = page.getByRole('heading', {name: 'Create your Account'});
    }
}