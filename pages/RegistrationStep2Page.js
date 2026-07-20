import { BasePage } from './BasePage';
export class RegistrationStep2Page extends BasePage {
  constructor(page) {
        super(page);
        this.relationshipDivorced = page.getByText('Divorced', {exact: true});
        this.relationshipMarried = page.getByText('Married', {exact: true});
        this.relationshipAttached = page.getByText('Attached', {exact: true});
        this.relationshipSingle = page.getByText('Single', {exact: true});
        this.whoIsLabel = page.getByText('Who is:', {exact: true});

    }
}