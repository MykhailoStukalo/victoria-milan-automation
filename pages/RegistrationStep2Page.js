import { BasePage } from './BasePage';
export class RegistrationStep2Page extends BasePage {
  constructor(page) {
        super(page);
        this.interestedInLabel = page.getByText('Interested in:', {exact: true});
         

    }
}