import {BasePage} from './BasePage';
export class RegistrationPage extends BasePage {
    constructor (page) {
        super(page);
        // Registration - Step 1
        this.registrationTitle = page.getByRole('heading', {name: 'Create your Account'});
        this.genderMan = page.getByText('Man', {exact: true});
        this.genderWoman = page.getByText('Woman', {exact: true});
        this.completedSubStep = page.locator('.completed-sub-step');
        // Registration - Step 2
        this.relationshipDivorced = page.getByText('Divorced', {exact: true});
        this.relationshipMarried = page.getByText('Married', {exact: true});
        this.relationshipAttached = page.getByText('Attached', {exact: true});
        this.relationshipSingle = page.getByText('Single', {exact: true});
        this.whoIsLabel = page.getByText('Who is:', {exact: true});
         // Registration - Step 3
        this.interestedInLabel = page.getByText('Interested in:', {exact: true});
        this.interestedInMen = page.getByText('Men', {exact: true});
        this.interestedInWomen = page.getByText('Women', {exact: true});
        this.interestedInBoth = page.getByText('Both', {exact: true});
        this.interestedInOptions = page.locator('.ft-interested-in');
    }
}