import { BasePage } from './BasePage';
export class RegistrationStep3Page extends BasePage {
  constructor(page) {
        super(page);
        this.interestedInLabel = page.getByText('Interested in:', {exact: true});
        this.interestedInMan = page.getByText('Man', {exact: true});
        this.interestedInWoman = page.getByText('Woman', {exact: true});
        this.interestedInBoth = page.getByText('Both', {exact: true});
        this.interestedInOptions = page.locator('.ft-interested-in');

         

    }
}