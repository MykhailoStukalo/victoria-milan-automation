import {BasePage} from './BasePage';
export class RegistrationPage extends BasePage {
    constructor (page) {
        super(page);
        this.registrationTitle = page.getByRole('heading', {name: 'Create your Account'});
        this.genderMan = page.getByText('Man', {exact: true});
        this.genderWoman = page.getByText('Woman', {exact: true});
        this.completedSubStep = page.locator('.completed-sub-step');
        this.relationshipDivorced = page.getByText('Divorced', {exact: true});
        this.relationshipMarried = page.getByText('Married', {exact: true});
        this.relationshipAttached = page.getByText('Attached', {exact: true});
        this.relationshipSingle = page.getByText('Single', {exact: true});
        this.whoIsLabel = page.getByText('Who is:', {exact: true});
        this.interestedInLabel = page.getByText('Interested in:', {exact: true});
        this.interestedInMan = page.getByText('Man', {exact: true});
        this.interestedInWoman = page.getByText('Woman', {exact: true});
        this.interestedInBoth = page.getByText('Both', {exact: true});
        this.interestedInOptions = page.locator('.ft-interested-in');
    }
}